const validate = require('../controllers/validation');
const userSchema = require('../models/users.model')
const buSchema = require('../models/brands.model')
const ObjectId = require('mongoose').Types.ObjectId
const { check, validationResult, buildCheckFunction } = require('express-validator')

const checkBodyAndQuery = buildCheckFunction(['body', 'query']);


const userIdValidator = check('userId')
    .notEmpty().withMessage("User Id is required")
    .bail()
    .trim().isMongoId().withMessage("Invalid value")


const nameValidator = check('name')
    .notEmpty().withMessage("User name is required")
    .bail()
    .trim()
    .matches(/^[A-Za-z\s]+$/).withMessage("Invalid value") //String to mach Alphabetical and spaces only
    .bail()
    .isLength({ min: 2 }).withMessage("Invalid value")
    

const emailValidator = check('email')
    .notEmpty().withMessage("Email is required")
    .bail()
    .trim()
    .isEmail().withMessage("Invalid Email Address")

const buIdValidator = checkBodyAndQuery('BUID')
    .optional({ checkFalsy: true })
    .bail()
    .trim().isMongoId().withMessage("Invalid value")

const userTypeValidator = check('userType')
    .notEmpty().withMessage("User type is required")
    .bail()
    .trim().matches(/^[A-Za-z\s]+$/).withMessage("Invalid value")
    .bail()
    .isIn(Object.keys(USER_TYPES_S2I)).withMessage("Invalid user type2")

const isTeamRepValidator = checkBodyAndQuery('isTeamRep')
    .isBoolean().withMessage('Invalid value')



const userAddValidator = [
    nameValidator,
    emailValidator,
    userTypeValidator
]

const userUpdateValidator = [
    userIdValidator,
    nameValidator,
    emailValidator,
    userTypeValidator
]

const userDeleteValidator = [
    userIdValidator
]
const userFetchValidator = [
    isTeamRepValidator
]

function generateResetToken() {
    console.log("in token generation")
    return "Axjnn2jkn2hjbb4hjb32l1ljbhjb3hb2"
}
async function sendValidator(req, res) {
    console.log("before calling validation result2")
    const errors = await validationResult(req)
    console.log("insied bu add api3", errors)
    if (!errors.isEmpty()) {
        return res.status(400).send({ "message": "Validation failed", "error": errors.errors })
    }
    return
}

function addUser(req, res) {
    /**
     * User's full name, email, type, mobile number, designation, BU Id, status of team representative or not is required to add new user
     * User will receive an welcome email and required to create new password from provided link
     */

    try {
        sendValidator(req, res)
        const addUer = {
            name: req.body.name,
            email: req.body.email,
            userType: USER_TYPES_S2I[req.body.userType]
        }
        const newUser = new userSchema(addUer)
        newUser.save()
            .then(data => {
                console.log(data)
                return res.status(200).send({ "message": "User created successfully" })
            })
            .then(() => {
                //Generate Reset token
                // And send welcome mail and create password link
                return generateResetToken()
            })
            .catch(err => {
                console.log(err)
                if (err.code === 11000) {
                    return res.status(400).send({ "message": "User already exists" })
                }
                else {
                    return res.status(400).send({ "message": "Server Error!" })
                }
            })
    }
    catch (e) {
        console.log("eer", e)
        return res.status(400).send({ "message": "Server Error!" })
    }

}

async function updateUser(req, res) {
    /**
     *  Admin can change user details using userId
     *  Admin can update user's all information
     */
    try {
        // if (!(req.body.userType in USER_TYPES_S2I)) {
        //     return res.status(400).send({ "message": "Invalid User Type" })
        // }
        console.log("before validator1")
        await sendValidator(req, res)
        console.log("after validator4")
        const userId = req.body.userId
        const updatedUser = {
            name: req.body.name,
            email: req.body.email,
            userType: USER_TYPES_S2I[req.body.userType]
        }
        userSchema.update({ "_id": ObjectId(userId) }, { "$set": updatedUser })
            .then(status => {
                console.log(status)
                if (status.n === 0) {
                    return res.status(200).send({ "message": "User not found" })
                }
                else {
                    return res.status(200).send({ "message": "User details updated successfully" })
                }
            })
            .then(() => {
                //Generate Reset token
                // And send welcome mail and create password link
                return generateResetToken()
            })
            .catch(err => {
                console.log(err)
                if (err.code === 11000) {
                    return res.status(400).send({ "message": "User already exists" })
                }
                else {
                    return res.status(400).send({ "message": "Server Error!" })
                }
            })
    }
    catch (e) {
        console.log("eer", e)
        return res.status(400).send({ "message": "Server Error!" })
    }
}

function fetchUser(req, res) {
    /** Deprecated see v2 */
    /**
     * To fetch User list
     * Set all to true or 1 to fetch all other information of user
     * O/w it will return name and id only
     * Need to set isTreamRepresentative when BU representative asks to list
     * If admin can request all and the specific selected user list
     */
    try {
        // console.log("quer", req.query)
        let filterOption = {}
        let project = {
                name: 1,
                email: 1,
                userType: 1
            }
        userSchema.find({},project)
            .then(data => {
                // console.log("dataaaaa", data)
                for (let i in data) {
                    data[i].userType = USER_TYPES_I2S[data[i].userType]
                }
                return res.status(200).send({"data": data })
            })
            .catch(err => {
                console.log("catched Error", err)
                return res.status(400).send({ "message": "Server Error!" })
            })
    }
    catch (e) {
        return res.status(400).send({ "message": "Server Error!" })
    }
}




function deleteUser(req, res) {
    try {
        sendValidator(req, res)
        const userId = req.body.userId

        userSchema.remove({ "_id": ObjectId(userId) })
            .then(status => {
                console.log(status)
                if (status.deletedCount == 1) {
                    return res.status(200).send({ "message": "User deleted successfully" })
                }
                else {
                    return res.status(200).send({ "message": "User not found" })
                }
            })
            .catch(err => {
                console.error(err)
                return res.status(400).send({ "message": "Server Error!" })
            })
    }
    catch (e) {
        return res.status(400).send({ "message": "Server Error" })
    }
}


module.exports = {
    //Validators
    userAddValidator,
    userUpdateValidator,
    userDeleteValidator,
    userFetchValidator,

    //APIs
    addUser,
    updateUser,
    fetchUser,
    deleteUser
}