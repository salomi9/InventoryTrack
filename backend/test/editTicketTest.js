// let userSchema = null //require('../models/user.model')

// const invalidInString = ["001323", "A", "null", "undefined", "error"]
// const invalidString = [null, Error, new Date(), undefined, { "$gte": "" }, 123]
// const invalidBool = [null, Error, new Date(), undefined, { "$gte": "" }, 1, 0, {}, NaN]
// const invalidNodeIdStr = [null, undefined, new Error(), new Date(), { "$gte": "" }, 2536.253]
// const invalidDateStr = ["2020-04-31T12:30:30.000Z", 12.325, "2020", "2020-04", "20205-04-31T12:30:30.000Z", "20205-04-31T12:30:30.wxyZ", {}, null, undefined, new Error()]
// const invalidObjectId = ["AZXSD", "1234", 1235.63, null, undefined, new Error(""), new Date(), "0x325", {}]
// const userTypes = ["Team Member", "BU Representative"]

// const ObjectId = require('mongoose').Types.ObjectId;
// const addReq = {
//     "customerEmail": "testemail@gmail.com",
//     "customerName": "Test Name",
//     "customerAddress": "D-307 , Sakshat Apartment",
//     "customerMNo": 9879797090,
//     "BUID": "5ea6b5bf952978f016e795ef",
//     "remark": "remark",
//     "actionTaken": "fired all",
//     "delayReason": "no one is doing work",
//     "designatedPerson": "Hitarth",
//     "startDate": "2020-05-25",
//     "closingDate": "2020-06-29",
//     "dueDate": "2020-07-25",
//     "assigningDate": "2020-06-25",
//     "isValid": "true",
//     "inWarranty": "true",
//     "status": "Open",
//     "priority": "High",
//     "updatedDate": "2020-05-25",
//     "userType": "Admin",
//     "customerComplain": "The system is Hanged",
//     "ticketType": "Project"
// }

// describe('Ticket Edit Test ', async () => {
//     beforeEach(async () => {
//         ticketSchema = require('.../models/salesOrder.model')
//         return ticketSchema.remove({ "BUID": ObjectId(addReq.BUID), "customerMNo": addReq.customerMNo });
//     })

//     describe('Ticket Edit', async () => {
//         before(async () => {
//             //clean db here
//             // done()
//         })

//         describe('For Empty Body ', async () => {
//             for (let ticketNo of invalidString) {
//                 it('should throw error for empty body' + ticketNo, async () => {
//                     const emptyBody = {}
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(emptyBody)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Ticket No is required');

//                             // assert.equal(res.body.error[0].param, 'ticketNo')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Ticket No', async () => {
//             for (let ticketNo of invalidString) {
//                 it('should throw error for ticketNo ' + ticketNo, async () => {
//                     addReq["ticketNo"] = ticketNo;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Ticket No is required');

//                            // assert.equal(res.body.error[0].param, 'ticketNo')

//                         })
//                 })
//             }
//         })

//         for (let invalidUser of userTypes) {
//             describe('For userType ' + invalidUser, async () => {
//                it('should throw error for editing customer name', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["customerName"] = "abc";
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })


//                 it('should throw error for editing customer address', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["customerAddress"] = "abc";
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })


//                 it('should throw error for editing customer customerMNo', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["customerMNo"] = "abc";
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })


//                 it('should throw error for editing customer email', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["customerEmail"] = "abc@gmail.com";
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })

//                 it('should throw error for editing dueDate', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["dueDate"] = new Date();
//                     console.log("--------------------------", addReq)
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })

//                 it('should throw error for editing status', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["status"] = "High";
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })

//                 it('should throw error for editing assigned member', async () => {
//                     addReq["userType"] = invalidUser;
//                     addReq["assignedMember"] = "abc";
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                         })

//                 })

//             })

//         }

//         describe('For Invalid Customer Email', async () => {
//             for (let customerEmail of invalidString) {
//                 it('should throw error for customerEmail ' + customerEmail, async () => {
//                     addReq["customerEmail"] = customerEmail;
//                     // // expected
//                     // {
//                     //     "message": "Validation failed",
//                     //     "error": [
//                     //         {
//                     //             "value": "",
//                     //             "msg": "Customer Email is required",
//                     //             "param": "customerEmail",
//                     //             "location": "body"
//                     //         }
//                     //     ]
//                     // }
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Customer Email is required');

//                             //assert.equal(res.body.error[0].param, 'customerEmail')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Customer Email of type String', async () => {
//             for (let customerEmail of invalidInString) {
//                 it('should throw error for customerEmail ' + customerEmail, async () => {
//                     addReq["customerEmail"] = customerEmail;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');                              
//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Customer Email is required');
//                             // assert.equal(res.body.error[0].param, 'customerEmail')

//                         })
//                 })
//             }

//         })


//         describe('For Invalid Customer Name', async () => {
//             for (let customerName of invalidString) {
//                 it('should throw error for customer name ' + customerName, async () => {
//                     addReq["customerName"] = customerName;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Customer Name is Required');

//                             // assert.equal(res.body.error[0].param, 'customerName')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Customer Name of type String', async () => {
//             for (let customerName of invalidInString) {
//                 it('should throw error for customer name ' + customerName, async () => {
//                     addReq["customerName"] = customerName;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Customer Name is Required');

//                             // assert.equal(res.body.error[0].param, 'customerName')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid Customer Address', async () => {
//             for (let customerAddress of invalidString) {
//                 it('should throw error for customer address ' + customerAddress, async () => {
//                     addReq["customerAddress"] = customerAddress;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Customer Address is Required');

//                             // assert.equal(res.body.error[0].param, 'customerAddress')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid Customer Mobile Number', async () => {
//             for (let customerMobNo of invalidString) {
//                 it('should throw error for Customer MobNumber ' + customerMobNo, async () => {
//                     addReq["customerMNo"] = customerMobNo;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'customerMNo')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Customer Mobile Number of Type String', async () => {
//             for (let customerMobNo of invalidInString) {
//                 it('should throw error for Customer MobNumber ' + customerMobNo, async () => {
//                     addReq["customerMNo"] = customerMobNo;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'customerMNo')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid BUID', async () => {
//             for (let BUID of invalidString) {
//                 it('should throw error for BUID ' + BUID, async () => {
//                     addReq["buID"] = BUID;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'BUID')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid BUID of Type String', async () => {
//             for (let BUID of invalidInString) {
//                 it('should throw error for BUID ' + BUID, async () => {
//                     addReq["buID"] = BUID
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'BUID')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid Customer Complain', async () => {
//             for (let customerComplain of invalidString) {
//                 it('should throw error for customer Complain ' + customerComplain, async () => {
//                     addReq["customerComplain"] = customerComplain;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'customerComplain')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid remarks', async () => {
//             for (let remark of invalidString) {
//                 it('should throw error for remark ' + remark, async () => {
//                     addReq.remark = remark;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)

//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'remarks')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid action taken', async () => {
//             for (let actionTaken of invalidString) {
//                 it('should throw error for action taken ' + actionTaken, async () => {
//                     addReq.actionTaken = actionTaken;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');

//                             //assert.equal(res.body.error[0].param, 'actionTaken')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid Designated Person', async () => {
//             for (let designatedPerson of invalidString) {
//                 it('should throw error for person ' + designatedPerson, async () => {
//                     addReq.designatedPerson = designatedPerson;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             // assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Designated Person of type string', async () => {
//             for (let designatedPerson of invalidInString) {
//                 it('should throw error for person ' + designatedPerson, async () => {
//                     addReq.designatedPerson = designatedPerson;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             expect(res.body).to.haveOwnProperty('error');
//                             // assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             // assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid dates', async () => {
//             for (let dates of invalidString) {
//                 it('should throw error for startDate, endDate and dueDate ' + dates, async () => {
//                     addReq.startDate = dates;
//                     addReq.closingDate = dates;
//                     addReq.dueDate = dates
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid dates of type String', async () => {
//             for (let dates of invalidInString) {
//                 it('should throw error for startDate, endDate and dueDate ' + dates, async () => {
//                     addReq.startDate = dates;
//                     addReq.closingDate = dates;
//                     addReq.dueDate = dates
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })


//         describe('For Invalid Validity, Warranty', async () => {
//             for (let invalid of invalidBool) {
//                 it('should throw error for valid, warranty ' + invalid, async () => {
//                     addReq.isValid = invalid;
//                     addReq.inWarranty = invalid;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Validity, Warranty Of type String', async () => {
//             for (let invalid of invalidInString) {
//                 it('should throw error for valid, warranty ' + invalid, async () => {
//                     addReq.isValid = invalid;
//                     addReq.inWarranty = invalid;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For invalid status', async () => {
//             for (let invalid of invalidBool) {
//                 it('should throw error for status ' + invalid, async () => {
//                     addReq.status = invalid;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For invalid Priority', async () => {
//             for (let invalid of invalidBool) {
//                 it('should throw error for priority ' + invalid, async () => {
//                     addReq.priority = invalid;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//         describe('For invalid userType', async () => {
//             for (let invalid of invalidBool) {
//                 it('should throw error for userType ' + invalid, async () => {
//                     addReq.userType = invalid;
//                     return baseURL.post('/ticket/editTicket')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');

//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                             //assert.equal(res.body.error[0].param, 'designatedPerson')

//                         })
//                 })
//             }
//         })

//     })

// })
