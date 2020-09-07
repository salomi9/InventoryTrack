const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brand = new Schema({
    brandName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    collection: 'brands'
});

module.exports = mongoose.model('brands', brand)