const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outletSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true,
    },
    psrId:{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }
}, {
    collection: 'outlets'
});

outletSchema.index({ "name": 1 , "address" : 1, "psrId" : 1}, { "unique": true })


module.exports = mongoose.model('outlets', outletSchema)