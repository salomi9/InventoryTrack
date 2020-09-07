/**
 * Schema for storing user details
 */


const crypto = require('crypto')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

console.log("userType keys", Object.keys(USER_TYPES_I2S))
//User Schema
const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    
    userType: {
        type: String,
        enum:  Object.keys(USER_TYPES_I2S),
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    password: {
        type: String
    },

    reset: {
        used: {
            type: Boolean,
            default: false
        },
        token: {
            type: String
        }
    },

    create_date: {
        type: Date,
        default: new Date(new Date().getTime() + 19800000)
    },

    update_date: {
        type: Date,
        default: new Date(new Date().getTime() + 19800000)
    }
}, {
    collection: 'users'
});

usersSchema.index({ "email": 1 }, { "unique": true })

usersSchema.methods.createHash = (password) => {
    // need to be replaced with bcrypt
    const cipher = crypto.createCipher('aes192', 'erqAFxxCshjKlaq')
    cipher.update(password, 'utf8', 'hex')
    const Hash = cipher.final('hex')
    return Hash
}

usersSchema.pre('save', function (next) {
    const user = this;
    user.update_date = Date();
    if(typeof(user.password) !== "string")
    {//Remove else section after user authentication module changed
        user.password = "Osl@1234"
    }
    if (user.password) {
        const cipher = crypto.createCipher('aes192', 'erqAFxxCshjKlaq')
        cipher.update(user.password, 'utf8', 'hex')
        user.password = cipher.final('hex')
    }
    next()
})

usersSchema.methods.comparePassword = (candidatePassword, user, cb) => {
    let match = false;
    console.log("the candidate password before encryption is ", candidatePassword)
    const cipher1 = crypto.createCipher('aes192', 'erqAFxxCshjKlaq')
    cipher1.update(candidatePassword, 'utf8', 'hex')
    candidatePassword = cipher1.final('hex')

    console.log("the candidate password is in compare password", candidatePassword, user.password)
    if (user.password) {

        if (candidatePassword === user.password) {
            console.log("inside if of matching pass")
            match = true
        }
        cb(match)
    } else {
        match = undefined;
        cb(match)
    }
}


module.exports =  mongoose.model('users', usersSchema);