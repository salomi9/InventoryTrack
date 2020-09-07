// let ticketSchema = null //require('../models/user.model')

// const invalidInString = ["001323", "A", "null", "undefined", "error"]
// const invalidString = [null, Error, new Date(), undefined, { "$gte": "" }, 123]
// const invalidBool = [null, Error, new Date(), undefined, { "$gte": "" }, 1, 0, {}, NaN]
// const invalidNodeIdStr = [null, undefined, new Error(), new Date(), { "$gte": "" }, 2536.253]
// const invalidDateStr = ["2020-04-31T12:30:30.000Z", 12.325, "2020", "2020-04", "20205-04-31T12:30:30.000Z", "20205-04-31T12:30:30.wxyZ", {}, null, undefined, new Error()]
// const invalidObjectId = ["AZXSD", "1234", 1235.63, null, undefined, new Error(""), new Date(), "0x325", {}]
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

// describe('Ticket Add Test', async () => {
//     beforeEach(async () => {
//         ticketSchema = require('.../models/salesOrder.model')
//         return ticketSchema.remove({ "BUID": ObjectId(addReq.BUID), "customerMNo": addReq.customerMNo });

//     })

//     describe('Ticket Fetch', async () => {
//         it('should give array of tickets', async () => {
//             const parameter = {}
//             let tickets = await ticketSchema.find()
//             tickets = JSON.parse(JSON.stringify(tickets))
//             return baseURL.post('/ticket/fetchTicketData')
//                 .set('Content-Type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send(parameter)
//                 .expect(200)
//                 .expect('Content-Type', 'application/json; charset=utf-8')
//                 .then(res => {
//                     expect(res.body).to.haveOwnProperty('data')
//                     expect(res.body.data).to.a('array').have.lengthOf(tickets.length)
//                     for (let i = 0; i < tickets.length; i++) {
//                         expect(res.body.data[i]).to.haveOwnProperty('ticketNo')
//                         expect(res.body.data[i]).to.haveOwnProperty('BUID')
//                         expect(res.body.data[i]).to.haveOwnProperty('customerName')
//                         expect(res.body.data[i]).to.haveOwnProperty('customerComplain')
//                     }
//                 })
//         })
//     })

//     describe('Ticket Add', async () => {
//         before(async () => {
//             //clean db here
//             // done()
//         })

//         describe('For Normal Inputs', async () => {
//             it('should return success Message', async () => {
//                 return baseURL.post('/ticket/addTicket')
//                     .set('Content-Type', 'application/json')
//                     .set('Accept', 'application/json')
//                     .send(addReq)
//                     .expect(200)
//                     .expect('Content-Type', 'application/json; charset=utf-8')
//                     .then(res => {
//                         expect(res.body).to.haveOwnProperty('message')
//                         //assert.equal(res.body.message, 'Ticket Data has been added');
//                     })
//             })
//         })

//         describe('For Duplicate Input', async () => {
//             it('should not add duplicate and display that Message', async () => {
//                 return baseURL.post('/ticket/addTicket')
//                     .set('Content-Type', 'application/json')
//                     .set('Accept', 'application/json')
//                     .send(addReq)
//                     .expect(200)
//                     .expect('Content-Type', 'application/json; charset=utf-8')
//                     .then(res => {
//                         expect(res.body).to.haveOwnProperty('message')
//                        // assert.equal(res.body.message, 'Already added');
//                     })
//             })
//         })

//         describe('For Empty Body ', async () => {
//             it('should throw error for empty body', async () => {
//                 const emptyBody = {}
//                 return baseURL.post('/ticket/addTicket')
//                     .set('Content-Type', 'application/json')
//                     .set('Accept', 'application/json')
//                     .send(emptyBody)
//                     .expect(400)
//                     .expect('Content-Type', 'application/json; charset=utf-8')
//                     .then(res => {
//                         expect(res.body).to.haveOwnProperty('message')
//                         //assert.equal(res.body.message, 'Ticket Data has been added');
//                         expect(res.body).to.haveOwnProperty('error');
//                     })
//             })
//         })

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
//                     //             "msg": "It is Not a valid Email",
//                     //             "param": "customerEmail",
//                     //             "location": "body"
//                     //         }
//                     //     ]
//                     // }
//                     return baseURL.post('/ticket/addTicket')
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
//                             //assert.equal(res.body.error[0].msg, 'It is Not a valid Email');

//                            // assert.equal(res.body.error[0].param, 'customerEmail')
//                             // done();
//                         })
//                 })
//             }
//         })

//             describe('For Invalid Customer Email of type String', async () => {
//                 for (let customerEmail of invalidInString) {
//                     it('should throw error for customerEmail ' + customerEmail, async () => {
//                         addReq["customerEmail"] = customerEmail;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');                              
//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'It is Not a valid Email');
//                                 //assert.equal(res.body.error[0].param, 'customerEmail')

//                             })
//                     })
//                 }

//             })


//             describe('For Invalid Customer Name', async () => {
//                 for (let customerName of invalidString) {
//                     it('should throw error for customer name ' + customerName, async () => {
//                         addReq["customerName"] = customerName;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'It should be string');

//                                 //assert.equal(res.body.error[0].param, 'customerName')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid Customer Name of type String', async () => {
//                 for (let customerName of invalidInString) {
//                     it('should throw error for customer name ' + customerName, async () => {
//                         addReq["customerName"] = customerName;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Customer Name is Required');

//                                 //assert.equal(res.body.error[0].param, 'customerName')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid Customer Address', async () => {
//                 for (let customerAddress of invalidString) {
//                     it('should throw error for customer address ' + customerAddress, async () => {
//                         addReq["customerAddress"] = customerAddress;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'It should be string');

//                                 //assert.equal(res.body.error[0].param, 'customerAddress')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid Customer Mobile Number', async () => {
//                 for (let customerMobNo of invalidString) {
//                     it('should throw error for Customer MobNumber ' + customerMobNo, async () => {
//                         addReq["customerMNo"] = customerMobNo;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');
//                                 // for(let i = 0 ; i < res.body.data.length ; i++){
//                                 //     expect(res.body.data[i].customerMNo).to.have.lengthOf(10)
//                                 // }
                                
//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Mobile Numbers Should Contain Numerics');

//                                 //assert.equal(res.body.error[0].param, 'customerMNo')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid Customer Mobile Number of Type String', async () => {
//                 for (let customerMobNo of invalidInString) {
//                     it('should throw error for Customer MobNumber ' + customerMobNo, async () => {
//                         addReq["customerMNo"] = customerMobNo;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Mobile Numbers Should Contain Numerics');

//                                 //assert.equal(res.body.error[0].param, 'customerMNo')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid BUID', async () => {
//                 for (let BUID of invalidString) {
//                     it('should throw error for BUID ' + BUID, async () => {
//                         addReq["BUID"] = BUID;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Email id is required');

//                                 //assert.equal(res.body.error[0].param, 'BUID')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid BUID of Type String', async () => {
//                 for (let BUID of invalidInString) {
//                     it('should throw error for BUID ' + BUID, async () => {
//                         addReq["buID"] = BUID
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Email id is required');

//                                 //assert.equal(res.body.error[0].param, 'BUID')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid Customer Complain', async () => {
//                 for (let customerComplain of invalidString) {
//                     it('should throw error for customer Complain ' + customerComplain, async () => {
//                         addReq["customerComplain"] = customerComplain;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Email id is required');

//                                 //assert.equal(res.body.error[0].param, 'customerComplain')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid remarks', async () => {
//                 for (let remark of invalidString) {
//                     it('should throw error for remark ' + remark, async () => {
//                         addReq.remark = remark;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 console.log("Ye aana chaiye", res.body)

//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Email id is required');

//                                 //assert.equal(res.body.error[0].param, 'remarks')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid action taken', async () => {
//                 for (let actionTaken of invalidString) {
//                     it('should throw error for action taken ' + actionTaken, async () => {
//                         addReq.actionTaken = actionTaken;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Email id is required');

//                                 //assert.equal(res.body.error[0].param, 'actionTaken')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid Designated Person', async () => {
//                 for (let designatedPerson of invalidString) {
//                     it('should throw error for person ' + designatedPerson, async () => {
//                         addReq.designatedPerson = designatedPerson;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                // assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid Designated Person of type string', async () => {
//                 for (let designatedPerson of invalidInString) {
//                     it('should throw error for person ' + designatedPerson, async () => {
//                         addReq.designatedPerson = designatedPerson;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid dates', async () => {
//                 for (let dates of invalidString) {
//                     it('should throw error for startDate, endDate and dueDate ' + dates, async () => {
//                         addReq.startDate = dates;
//                         addReq.closingDate = dates;
//                         addReq.dueDate = dates
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid dates of type String', async () => {
//                 for (let dates of invalidInString) {
//                     it('should throw error for startDate, endDate and dueDate ' + dates, async () => {
//                         addReq.startDate = dates;
//                         addReq.closingDate = dates;
//                         addReq.dueDate = dates
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })


//             describe('For Invalid Validity, Warranty', async () => {
//                 for (let invalid of invalidBool) {
//                     it('should throw error for valid, warranty ' + invalid, async () => {
//                         addReq.isValid = invalid;
//                         addReq.inWarranty = invalid;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For Invalid Validity, Warranty Of type String', async () => {
//                 for (let invalid of invalidInString) {
//                     it('should throw error for valid, warranty ' + invalid, async () => {
//                         addReq.isValid = invalid;
//                         addReq.inWarranty = invalid;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For invalid status', async () => {
//                 for (let invalid of invalidBool) {
//                     it('should throw error for status ' + invalid, async () => {
//                         addReq.status = invalid;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For invalid Priority', async () => {
//                 for (let invalid of invalidBool) {
//                     it('should throw error for priority ' + invalid, async () => {
//                         addReq.priority = invalid;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })

//             describe('For invalid userType', async () => {
//                 for (let invalid of invalidBool) {
//                     it('should throw error for userType ' + invalid, async () => {
//                         addReq.userType = invalid;
//                         return baseURL.post('/ticket/addTicket')
//                             .set('Content-Type', 'application/json')
//                             .set('Accept', 'application/json')
//                             .send(addReq)
//                             .expect(400)
//                             .expect('Content-Type', 'application/json; charset=utf-8')
//                             .then(res => {
//                                 expect(res.body).to.haveOwnProperty('message')
//                                 //assert.equal(res.body.message, 'Validation failed');

//                                 expect(res.body).to.haveOwnProperty('error');
//                                 //assert.equal(res.body.error[0].msg, 'Designated Person is required');

//                                 //assert.equal(res.body.error[0].param, 'designatedPerson')

//                             })
//                     })
//                 }
//             })



//     })

// })