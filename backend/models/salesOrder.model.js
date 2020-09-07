const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesOrderSchema = new Schema({

    salesOrderNo: {
        type: Number,
        unique: true,
        required: true
    },
    
    orderDate: {
        type: Date,
        default: new Date(new Date().getTime()+19800000),
        required: true
    },

    outletId: {
        type: mongoose.Types.ObjectId,
        ref: 'outlets'
    },
    brandId: {
        type: mongoose.Types.ObjectId,
        ref: 'brands'
    },
    size: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    psrId: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    updateDate: {
        type: Date,
        default: new Date(new Date().getTime()+19800000),
        required: true
    },
   
}, {
    collection: 'salesOrders'
});

salesOrderSchema.pre('save', function(next)  {
	const salesOrder = this;
    this.createdAt = new Date(new Date().getTime()+19800000)
	next()
})

salesOrderSchema.index({ "outletId": 1, "psrId" : 1, "orderDate" : 1 }, { "unique": true })
salesOrderSchema.index({ "outletId": 1, "brandId" : 1 }, { "unique": true })

salesOrderSchema.pre('update', function(err, raw){
    console.log("update document err", err)
    console.log("update document raw", raw)
})

module.exports = mongoose.model('salesOrders', salesOrderSchema);



