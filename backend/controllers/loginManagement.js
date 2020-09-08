
const { body, validationResult, check } = require("express-validator")
const validation = require('../controllers/validation');
const userSchema = require('../models/users.model')
const moment = require('moment');

const multer = require('multer');
const fs = require('fs')
const mime = require('mime')
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')



const crypto = require('crypto')

const spr = ['/ticket/editTicket', '/ticket/fetchTicketData', '/loginManagement/forgotPassword',
    '/loginManagement/createPassword', '/loginManagement/changePassword']



let transporter = nodemailer.createTransport
    (
        {
            service: 'Gmail',
            //host: "smtp-mail.outlook.com"
            host: 'smtp.gmail.com',
            auth: {
                user: 'noreply.optimizedsolutions@gmail.com',
                pass: 'noreply@ospl.ooo',
                // user: 'indrapathak28@outlook.comm',
                // pass: 'Indra28@'
            }
        }
    )

function validCompanyId(inputCid) {
    // const string = /[A-Z]{2}[0-9]{2}/
    if (typeof (inputCid) === "string") {
        return inputCid
    } else {
        throw "Invalid CompanyId"
    }
}

function validatePassword(pwd) {
    console.log("we are inside validate password function")
    if (pwd.match(/[A-Z]/) &&
        pwd.match(/[a-z]/) &&
        pwd.match(/\d/) &&
        pwd.match(/[^\w\*]/) &&
        pwd.length >= 8 &&
        pwd.length <= 20) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    console.log("we are inside validate email");
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function readHTMLFile(path, callback) {
    fs.readFile(path, {
        encoding: 'utf-8'
    }, function (err, html) {
        if (err) {
            throw err;
        } else {
            callback(null, html);
        }
    })
}


module.exports = {

    authenticate: function (req, res, next) {

        console.log("we are inside authenticate function", req.session)
        return next()   //when in developer mode

        // When in deployment mode
        if (req.session["uid"] == (undefined || null)) {
            return res.status(401).send({
                "message": "Authentication Required"
            })
        }
        try {

            userSchema.find({ "_id": req.session["uid"] }, {
                "active": 1
            })
                .then(data => {
                    console.log("the data of user", data[0].active)
                    if (data[0].active) {
                        next()

                    }
                    else {
                        return res.status(401).send({
                            "message": "User is not active",

                        })
                    }
                })

        }
        catch (err) {

            console.log("authenticate", err)
            return res.status(401).send({
                "message": "Authentication Error"
            })
        }
    },


    authorize: function (apiName) {

        // For Devlopment mode 
        return (req, res, next) => next()

        // For Deployment Mode
        return (req, res, next) => {
            console.log("the session in authorize", req.session, req.session["uid"])
            if (apiName !== (null || undefined) && typeof apiName === "string") {
                try {
                    userSchema.find({ "_id": req.session["uid"] }, {
                        "userType": 1
                    }).then(data => {
                        console.log("dat in authorize is", data)
                        data[0].userType = USER_TYPES_I2S[data[0].userType]
                        console.log("the data inside the authorize is", data, data[0]["userType"]
                            , teamManager.includes(apiName));

                        if (data[0]["userType"] == "Admin") {
                            next()
                        }
                        else if (data[0]["userType"] == "Product Sales Representative" && spr.includes(apiName)) {
                            next()
                        }
                        else {
                            res.status(403).json({
                                message: 'Access Denied'
                            });
                        }
                    })
                }
                catch (e) {
                    throw (e)
                }
            }
            else {
                res.status(403).json({
                    message: 'Server Error'
                });
            }
        }

    },

    userLogin: function (req, res) {
        console.log("we are inside login", typeof req.body.name, typeof req.body.password === "string")
        try {
            if (typeof req.body.name === "string" && typeof req.body.password === "string") {
                var name = req.body.name.toString()

                var pwd = req.body.password.toString()

                const cipher = crypto.createCipher('aes192', 'erqAFxxCshjKlaq')
                cipher.update(pwd, 'utf8', 'hex')
                const encryPassword = cipher.final('hex')
                console.log("encrypted pass", encryPassword)
                userSchema.find({ "email": name, "password": encryPassword }, {})
                    .then(data => {
                        console.log("data of first query is", data)
                        if (data[0] != (undefined || null)) {
                            if (data != null && data.length == 1) {
                                var hour = 24 * 60 * 60 * 1000;
                                req.session.uid = data[0]._id;
                                // req.session.BUID = data[0].BUID;
                                req.session.cookie.expires = new Date(Date.now() + hour);
                                req.session.cookie.maxAge = hour;
                                req.session.userType = USER_TYPES_I2S[data[0].userType];
                                data[0].userType = USER_TYPES_I2S[data[0].userType]
                                res.status(200).send({
                                    "message": "Success",
                                    "userDetails": data,
                                    "session": req.session
                                })
                            }
                            else {
                                res.status(400).send({ "message": "Invalid User Details" })
                            }
                        }
                        else {
                            return res.status(401).send({
                                "message": "Incorrect Username or Password",
                            })
                        }
                    })
            }
            else {
                res.status(400).send({ "message": "Invalid User Details" })
            }
        }
        catch (e) {
            res.status(400).send({ "error": e })
        }
    },


    forgotPassword: function (req, res) {
        console.log("we are inside forgotPassword function", req.body.email);

        const errors = []
        try {
            if (!validateEmail(req.body.email)) {
                errors.push({
                    "param": "email",
                    "msg": "Invalid Email Address"
                })
                res.status(400).send({
                    "message": "Invalid Email Address",
                    errors
                })
            }
            console.log("we are here")
            userSchema.findOne({
                'email': req.body.email
            }, function (err, userFound) {
                if (err) {
                    errors.push({
                        "param": "email",
                        "msg": "Email Address not found"
                    })
                    return res.status(400).send({
                        "message": "Server Error! 1",
                        "err": err,
                        errors
                    });
                }

                if (userFound) {
                    console.log("The user that is found is ", userFound);
                    crypto.randomBytes(48, function (err, buffer) {
                        let token = buffer.toString('hex');
                        console.log("The token value obtained is ", token, userFound.email)

                        userFound.reset.token = token;
                        userFound.reset.used = false;
                        var obj = new userSchema(userFound)
                        console.log("second", obj)
                        obj.save(function (err, saved) {
                            if (err) {
                                errors.push({
                                    "param": "email",
                                    "msg": "Email Address not found"
                                })
                                return res.status(400).send({
                                    "message": "Server error 2",
                                    "err": err,
                                    errors
                                });
                            }
                            readHTMLFile('services/Email.html', function (err, html) {
                                const template = handlebars.compile(html);
                                const resetLink = req.protocol + '://' + req.get('host') + '/#/reset/' + token;
                                const replacements = {
                                    name: userFound.name,
                                    resetLink: resetLink,

                                    //bslLogoUrl: 'http://localhost:5001/assets/images/Blue-Star-logo.png'
                                };


                                const htmlToSend = template(replacements);
                                console.log("The token value obtained is ", userFound.email, resetLink)
                                const mailOptions = {
                                    // from: 'indrapathak28@outlook.com',
                                    from: 'noreply.optimizedsolutions@gmail.com',
                                    to: userFound.email,
                                    subject: 'SCMS - Reset password instructions',
                                    html: htmlToSend,
                                };

                                transporter.sendMail(mailOptions, function (error, info) {
                                    if (error) {
                                        errors.push({
                                            "param": "email",
                                            "msg": "SMTP Server Error, Please try again some time later"
                                        })
                                        return res.status(400).send({
                                            "message": "Server Error! 3",
                                            "err": error
                                        });
                                    }
                                    return res.status(200).send({
                                        "message": "Email has been sent!"
                                    });
                                });
                            });
                        });
                    });
                } else {
                    errors.push({
                        "param": "email",
                        "msg": "Email Address not found"
                    })
                    return res.status(400).send({
                        "message": "No user found!",
                        errors
                    });
                }
            });
        }
        catch (e) {
            res.status(400).send({
                "message": "Server Error! 3",
                "err": error
            });
        }
    },


    createPassword: function (req, res) {
        console.log("we are inside the create password function", req.body.token)
        if (req.body.password != (null || undefined) && typeof req.body.password === "string"
            && req.body.confirmPassword != (null || undefined) && typeof req.body.confirmPassword === "string"
            && req.body.token != (null || undefined) && typeof req.body.token === "string") {
            const password = req.body.password
            const confirmPassword = req.body.confirmPassword
            const token = req.body.token
            console.log("inside if")
            try {
                if (password !== confirmPassword) {
                    console.log("inside new password comparision")
                    return res.status(400).send({
                        "message": "Password does not match"
                    })
                }
                if (password.length < 8 || password.length > 20) {
                    console.log("inside password length comparisoin if")
                    return res.status(400).send({
                        "message": "Password character length must be greater than 8 and less than 20"
                    })
                }
                if (!validatePassword(password)) {
                    console.log("inside valide password if");
                    return res.status(400).send({
                        "message": "Password must contain Alphanumeric and Special Characters"
                    })
                }
                console.log("The password beforeewncryption is", password)
                const cipher = crypto.createCipher('aes192', 'erqAFxxCshjKlaq')
                cipher.update(password, 'utf8', 'hex')
                const encryPassword = cipher.final('hex')
                console.log("The password after encryption is", encryPassword)


                userSchema.find({ "reset.token": token }, { "reset.used": 1 })
                    .then(data => {
                        console.log("the data in first query is ", data)
                        if (data[0] != undefined && data[0].reset != undefined && !data[0].reset.used) {
                            console.log("inside if of first query")
                            userSchema.updateOne({ "reset.token": token }, {
                                "$set":
                                {
                                    "password": encryPassword,
                                    "reset.used": true
                                }
                            })
                                .then(success => {
                                    return res.status(200).send({
                                        "message": "Password updated successfully",
                                        success
                                    })
                                })
                        }
                        else {
                            return res.status(400).send({
                                "message": "This link can be used only once to set password"
                            })
                        }
                    })
            }
            catch (e) {
                throw (e);
            }

        }
        else {
            throw "Error : The Password , Confirm Password or userId are either null , undefined or its not a string ";
        }

    },


    changePassword: function (req, res) {

        console.log("we are inside change password function", req.body.userId)
        try {
            // //console.log(req.session)
            const userId = req.body.userId;
            // const userId = req.session._id ? req.session._id : req.body.userId
            console.log("userId", userId)
            if (typeof (userId) !== "string") {
                return res.status(403).send({
                    "message": "Session Expired"
                })
            }

            if (req.body.oldPassword != (null || undefined) && typeof req.body.oldPassword === "string"
                && req.body.newPassword1 != (null || undefined) && typeof req.body.newPassword1 === "string"
                && req.body.newPassword2 != (null || undefined) && typeof req.body.newPassword2 === "string") {

                const {
                    oldPassword,
                    newPassword1,
                    newPassword2
                } = req.body
                if (newPassword1 !== newPassword2) {
                    console.log("inside new password comparision")
                    return res.status(400).send({
                        "message": "Password does not match"
                    })
                }
                if (newPassword1.length < 8 || newPassword1.length > 20) {
                    console.log("inside password length comparisoin if")
                    return res.status(400).send({
                        "message": "Password character length must be greater than 8 and less than 20"
                    })
                }
                if (!validatePassword(newPassword1)) {
                    console.log("inside valide password if");
                    return res.status(400).send({
                        "message": "Password must contain Alphanumeric and Special Characters"
                    })
                }
                if (newPassword1 === oldPassword) {
                    return res.status(400).send({
                        "message": "Please create new password"
                    })
                }
                userSchema.findOne({
                    "_id": userId
                }, {
                    "password": 1,
                    "email": 1
                })
                    .then(userFound => {
                        console.log("The user that is found in change Password", userFound, req.body.oldPassword)
                        userFound.comparePassword(req.body.oldPassword, userFound, (match) => {
                            if (match) {
                                console.log("Inside match if")
                                const newEncrypted = userFound.createHash(newPassword1)
                                console.log("the encrypted password is ", newEncrypted);
                                userSchema.update({
                                    "_id": Object(userId)
                                }, {
                                    "$set": {
                                        "password": newEncrypted
                                    }
                                })
                                    .then(success => {
                                        return res.status(200).send({
                                            "message": "Password updated successfully",
                                            success
                                        })
                                    })
                                    .catch(error => {
                                        return res.status(400).send({
                                            "message": "Internal Server Error",
                                            error
                                        })
                                    })
                            } else {
                                return res.status(400).send({
                                    "message": "Wrong password"
                                })
                            }
                        })
                    })
                    .catch(err => {
                        console.error(err)
                        return res.status(400).send({
                            "message": "Internal Server Error"
                        })
                    })
            }
            else {
                throw "Error : OLD or new password are null or undefined in change password ";
            }
            //console.log(oldPassword, newPassword1, newPassword2)
            // res.status(200).send({"message":"Password updated successfully"})
        }
        catch (e) {
            res.status(400).send({
                "message": "Internal Server Error",
                "error": e
            })
        }
    },


    logout: function (req, res) {

        console.log("inisde logout function", req.session)
        if (req.session.uid) {
            console.log("inisde if of logout")
            req.session.cookie.expires = new Date(Date.now());
            req.session.cookie.maxAge = 0;
            req.session.destroy(function (err) {
                console.log("we are inside destroy function")
                return res.status(200).json({
                    "message": "Logged out!"
                });
            });
        } else {

            return res.status(200).json({
                "message": "Logged out  !"
            });
        }
    },
}