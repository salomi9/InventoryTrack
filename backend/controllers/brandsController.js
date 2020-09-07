const brandSchema = require('../models/brands.model')
const ObjectId = require('mongoose').Types.ObjectId
const userSchema = require('../models/users.model')
const regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i

const {check, validationResult} = require('express-validator')

const brandName = check('brandName')
                .notEmpty().withMessage("Brand Name is required")
                .bail()
                .trim()
                .matches(/^[A-Za-z\s]+$/).withMessage("Invalid value")
                .bail()
                .isLength({ min: 2 }).withMessage("Invalid value")

const BrandId = check('BrandId')
                    .notEmpty().withMessage("Brand Id is required")
                    .bail()
                    .trim().isMongoId().withMessage("Invalid value")

const brandAddValidator = [
    brandName
]

const brandUpdateValidator = [
    brandName,
    BrandId
]

const brandDeleteValidator = [
    BrandId
]

function sendValidator(req, res) {
    const errors = validationResult(req)
    // console.log("insied bu add api", errors)
    if(!errors.isEmpty())
    {
        return res.status(400).send({"message":"Validation failed", "error":errors.errors})
    }
    return
}

function addBrand(req, res) {
    try {
        sendValidator(req, res)
        const newBrand = {
            brandName: req.body.brandName,
        }
        const newBUSchema = new brandSchema(newBrand)

        newBUSchema.save()
            .then(status => {
                console.log("update", status)
                    return res.status(200).send({"message":"New brand added successfully"})
            })
            .catch(err => {
                // console.error("-------------", err, err.code)
                // console.log("-------", err.message.split(".$"))
                
                // match =  err.message.match(regex),  
                // indexName = match[1] || match[2]; 
                // console.log("mathce", match)
                // console.log("IndexName", indexName)
                // console.log("err.json", err.json())
                if(err.code == 11000)
                {
                    return res.status(400).send({"message":"Already added!"})
                }
                else
                {
                    return res.status(400).send({"message":"Server Error!"})
                }
            })
    }
    catch (e) {
        console.log("catchedErr", e)
        return res.status(400).send({
            "message": "Server Error"
        })
    }
}

function updateBrand (req, res) {
    try {
        sendValidator(req, res)
        const BrandId = req.body.BrandId
        const newBrand = {
            brandName: req.body.brandName           
        }
        
        brandSchema.update({"_id":ObjectId(BrandId)}, {"$set":newBrand})
            .then(status => {
                console.log("brand schema updatE", status)
                if(status.nModified == 1 || status.n > 0)
                {
                    return res.status(200).send({"message":"Brand updated successfully"})        
                }
                else
                {
                    return res.status(200).send({"message":"Brand not found"})
                }
            })
            .catch(err => {
                console.log("error catched",err)
                if(err.code === 11000)
                {
                    return res.status(400).send({"message":"Brand updated successfully"})
                }
                else
                {
                    return res.status(400).send({"message":"Server Error!"})
                }
            })
    }
    catch (e) {
        console.log("catchedErr", e)
        return res.status(400).send({
            "message": "Server Error"
        })
    }
}

function fetchBrand (req, res) {
    try {
        
        brandSchema.find({},{})
            .then(data => {
                return res.status(200).send({"data": data})
            })
            .catch(err => {
                console.errore(err)
                return res.status(400).send({"message":"Server Error!"})                
            })
    }
    catch (e) {
        console.log("catchedErr", e)
        return res.status(400).send({
            "message": "Server Error"
        })
    }
}

function deleteBrand (req, res) {
    try {
        sendValidator(req, res)
        const BrandId = req.body.BrandId
        brandSchema.remove({"_id":ObjectId(BrandId)})
            .then(status => {
                console.log(status)
                return res.status(200).send({"message":"Brand deleted successfully", status})
            })
            .catch(err => {
                console.errore(err)
                return res.status(400).send({"message":"Server Error!"})                
            })
    }
    catch (e) {
        console.log("catchedErr", e)
        return res.status(400).send({
            "message": "Server Error"
        })
    }
}

module.exports = {
    addBrand,
    updateBrand,
    deleteBrand,
    fetchBrand,
    brandAddValidator,
    brandDeleteValidator,
    brandUpdateValidator
}