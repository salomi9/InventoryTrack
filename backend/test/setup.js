const mocha = require('mocha')
const chai = require('chai')
const assert = require('assert')
const expect = chai.expect
const supertest = require('supertest')
const baseURL = supertest.agent('http://localhost:6060')

global.mocha = mocha
global.chai = chai
global.expect = expect
global.supertest = supertest
global.baseURL = baseURL
global.assert = assert


// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// //Called hooks which runs before something.
// beforeEach((done) => {
//     mongoose.connection.collections.tickets.drop(() => {
//          //this function runs after the drop is completed
//         done(); //go ahead everything is done now.
//     }); 
// });

global.app =  require('../app')
app.listen(6060)