/**
 * API endpoints will be defined here
 */

const salesOrder =  require('../controllers/salesOrderController');
const validation = require('../controllers/validation');
const brands = require('../controllers/brandsController');
const user = require('../controllers/user');
const outlet = require('../controllers/outletsController');
const general = require('../controllers/genericController');
const loginManagement = require('../controllers/loginManagement');

module.exports = (app) => {

    // app.route('/demo').post(user.demo1,user.demo);
    
    // Brand Management APIs
    app.route('/addBrand').post(loginManagement.authenticate,brands.brandAddValidator, brands.addBrand)
    app.route('/updateBrand').post(loginManagement.authenticate,brands.brandUpdateValidator, brands.updateBrand)
    app.route('/fetchBrands').get(loginManagement.authenticate,brands.fetchBrand)
    app.route('/deleteBrand').delete(loginManagement.authenticate,brands.brandDeleteValidator, brands.deleteBrand)

    // SalesOrder Management APIs
    app.route('/addSalesOrder').post(loginManagement.authenticate,loginManagement.authorize('/addSalesOrder'),validation.validateInput,salesOrder.addSalesOrder);
    app.route('/editSalesOrder').post(loginManagement.authenticate,loginManagement.authorize('/editSalesOrder'),validation.validateInput,salesOrder.editSalesOrder);
    // app.route('/leadEditSalesOrder').post(validation.inputParams1,validation.validateInput,salesOrder.leadEditSalesOrder);
    // app.route('/personEditSalesOrder').post(validation.inputParams2,validation.validateInput,salesOrder.personEditSalesOrder);
    app.route('/fetchSalesOrderData').post(loginManagement.authenticate,salesOrder.fetchSalesOrderData);

    // User Management APIs
    app.route('/addUser').post(loginManagement.authenticate,user.userAddValidator, user.addUser)
    app.route('/updateUser').post(loginManagement.authenticate,user.userUpdateValidator, user.updateUser)
    app.route('/fetchUsers').get(loginManagement.authenticate,user.userFetchValidator, user.fetchUser)
    app.route('/deleteUser').delete(loginManagement.authenticate,user.userDeleteValidator, user.deleteUser)

    // User Management APIs
    app.route('/addOutlet').post(loginManagement.authenticate,outlet.outletAddValidator, outlet.addOutlet)
    app.route('/updateOutlet').post(loginManagement.authenticate,outlet.outletUpdateValidator, outlet.updateOutlet)
    app.route('/fetchOutlets').get(loginManagement.authenticate, outlet.fetchOutlet)
    app.route('/deleteOutlet').delete(loginManagement.authenticate,outlet.outletDeleteValidator, outlet.deleteOutlet)

    // Login and Password Management
    app.route('/loginManagement/userLogin').post(loginManagement.userLogin);
    app.route('/loginManagement/authenticate').post(loginManagement.authenticate);
    app.route('/loginManagement/forgotPassword').post(loginManagement.forgotPassword);
    app.route('/loginManagement/createPassword').post(loginManagement.createPassword);
    app.route('/loginManagement/changePassword').post(loginManagement.changePassword);
    app.route('/loginManagement/logout').post(loginManagement.logout);


    //Generic Routes for all
    app.route('/types/:option').get(general.fetchTypes)
}
