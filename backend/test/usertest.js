// let userSchema = null //require('../models/user.model')

// const invalidInString = ["001323", "A", "null", "undefined", "error"]
// const invalidString = [null, Error, new Date(), undefined, { "$gte": "" }, 123]
// const invalidBool = [null, Error, new Date(), undefined, { "$gte": "" }, 1, 0, {}, NaN]
// const userTypes = ["Team Member", "BU Representative", "Team Representative", "Admin", "Management"]
// const ObjectId = require('mongoose').Types.ObjectId;

// let addReq = {
//     "name": "Test retest",
//     "email": "test@gmail.com",
//     "BUID": "5ec4ef505ac27f2606841cfd",
//     "userType": "Admin",
//     "userId": "5efaf33a9423916cd7ae0fe7"
// }

// describe('User Test module', async () => {
//     beforeEach(async () => {
//         userSchema = require('../models/user.model')
//         return userSchema.remove({ "userId": ObjectId(addReq.userId), "name":addReq.name, "email":addReq.email });
//     })

//     describe('User Fetch', async () => {
//         it('should give array of users', async () => {
//             let invalidAlls = ["1", 0, "", null, undefined, new Object()]
//             for (let invalall of invalidAlls) {
//                 it('All input', async () => {
//                     const parameter = {
//                         "all": invalall
//                     }
//                     let userSchema = await userSchema.find({}, {})
//                     userSchema = JSON.parse(JSON.stringify(users))
//                     return baseURL.get('/user/fetch')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(parameter)
//                         .expect(200)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye cheeze aayi", res.body.data)
//                             console.log("Ye aana chaiye", users)
//                             expect(res.body).to.haveOwnProperty('data')
//                             console.log("length", res.body.data.length, users.length)
//                             expect(res.body.data).to.a('array').have.lengthOf(users.length)
//                             expect(res.body.data).to.have.deep.members(users)
//                         })
//                 })
//             }
//         })
//     })

//     // describe('User Add', async () => {
//     //     before(async () => {
//     //         //clean db here 
//     //         // done() 
//     //     })

//     //     describe('For Normal Inputs', async () => {
//     //         it('should return success Message', async () => {
//     //             return baseURL.post('/user/add')
//     //                 .set('Content-Type', 'application/json')
//     //                 .set('Accept', 'application/json')
//     //                 .send(addReq)
//     //                 .expect(200)
//     //                 .expect('Content-Type', 'application/json; charset=utf-8')
//     //                 .then(res => {
//     //                     expect(res.body).to.haveOwnProperty('message')
//     //                     //assert.equal(res.body.message, 'Ticket Data has been added');
//     //                 })
//     //         })
//     //     })

//     //     describe('For Duplicate Input', async () => {
//     //         it('should not add duplicate and display that Message', async () => {
//     //             return baseURL.post('/user/add')
//     //                 .set('Content-Type', 'application/json')
//     //                 .set('Accept', 'application/json')
//     //                 .send(addReq)
//     //                 .expect(200)
//     //                 .expect('Content-Type', 'application/json; charset=utf-8')
//     //                 .then(res => {
//     //                     expect(res.body).to.haveOwnProperty('message')
//     //                     // assert.equal(res.body.message, 'Already added');
//     //                 })
//     //         })
//     //     })

//     //     describe('For Empty Body ', async () => {
//     //         it('should throw error for empty body', async () => {
//     //             const emptyBody = {}
//     //             return baseURL.post('/user/add')
//     //                 .set('Content-Type', 'application/json')
//     //                 .set('Accept', 'application/json')
//     //                 .send(emptyBody)
//     //                 .expect(400)
//     //                 .expect('Content-Type', 'application/json; charset=utf-8')
//     //                 .then(res => {
//     //                     expect(res.body).to.haveOwnProperty('message')
//     //                     //assert.equal(res.body.message, 'Ticket Data has been added');
//     //                     expect(res.body).to.haveOwnProperty('error');
//     //                 })
//     //         })
//     //     })

//     //     describe('For Invalid Name', async () => {
//     //         for (let name of invalidString) {
//     //             it('throws error for invalid user name ' + name, async () => {
//     //                 addReq["name"] = name;
//     //                 return baseURL.post('/user/add')
//     //                     .set('Content-Type', 'application/json')
//     //                     .set('Accept', 'application/json')
//     //                     .send(addReq)
//     //                     .expect(400)
//     //                     .expect('Content-Type', 'application/json; charset=utf-8')
//     //                     .then(res => {
//     //                         console.log("Ye aana chaiye", res.body)
//     //                         expect(res.body).to.haveOwnProperty('message')
//     //                         expect(res.body).to.haveOwnProperty('error');
//     //                         assert.equal(res.body.error[0].msg, 'Invalid value');
//     //                         assert.equal(res.body.error[0].param, 'name')
//     //                     })
//     //             })
//     //         }
//     //     })

//     //     describe('For Invalid Name of type String', async () => {
//     //         for (let name of invalidInString) {
//     //             it('should throw error for name ' + name, async () => {
//     //                 addReq["name"] = name;
//     //                 return baseURL.post('/user/add')
//     //                     .set('Content-Type', 'application/json')
//     //                     .set('Accept', 'application/json')
//     //                     .send(addReq)
//     //                     .expect(400)
//     //                     .expect('Content-Type', 'application/json; charset=utf-8')
//     //                     .then(res => {
//     //                         console.log("Ye aana chaiye", res.body)
//     //                         expect(res.body).to.haveOwnProperty('message')
//     //                         //assert.equal(res.body.message, 'Validation failed');
//     //                         expect(res.body).to.haveOwnProperty('error');
//     //                         assert.equal(res.body.error[0].msg, 'Invalid value');
//     //                         assert.equal(res.body.error[0].param, 'name')

//     //                     })
//     //             })
//     //         }
//     //     })

//     //     describe('For Invalid Email', async () => {
//     //         for (let email of invalidString) {
//     //             it('should throw error for Email ' + email, async () => {
//     //                 addReq["email"] = email;
//     //                 // expected
//     //                 // {
//     //                 //     "message": "Validation failed",
//     //                 //     "error": [
//     //                 //         {
//     //                 //             "value": "",
//     //                 //             "msg": "Customer Email is required",
//     //                 //             "param": "customerEmail",
//     //                 //             "location": "body"
//     //                 //         }
//     //                 //     ]
//     //                 // }
//     //                 return baseURL.post('/user/add')
//     //                     .set('Content-Type', 'application/json')
//     //                     .set('Accept', 'application/json')
//     //                     .send(addReq)
//     //                     .expect(400)
//     //                     .expect('Content-Type', 'application/json; charset=utf-8')
//     //                     .then(res => {
//     //                         console.log("Ye aana chaiye", res.body)
//     //                         expect(res.body).to.haveOwnProperty('message')
//     //                         //assert.equal(res.body.message, 'Validation failed');
//     //                         expect(res.body).to.haveOwnProperty('error');
//     //                         assert.equal(res.body.error[0].msg, 'Invalid Email Address');
//     //                         assert.equal(res.body.error[0].param, 'email')

//     //                     })
//     //             })
//     //         }
//     //     })

//     //     describe('For Invalid Email of type String', async () => {
//     //         for (let email of invalidInString) {
//     //             it('should throw error for Email ' + email, async () => {
//     //                 addReq["email"] = email;
//     //                 return baseURL.post('/user/add')
//     //                     .set('Content-Type', 'application/json')
//     //                     .set('Accept', 'application/json')
//     //                     .send(addReq)
//     //                     .expect(400)
//     //                     .expect('Content-Type', 'application/json; charset=utf-8')
//     //                     .then(res => {
//     //                         console.log("Ye aana chaiye", res.body)
//     //                         expect(res.body).to.haveOwnProperty('message')
//     //                         //assert.equal(res.body.message, 'Validation failed');        
//     //                         expect(res.body).to.haveOwnProperty('error');
//     //                         assert.equal(res.body.error[0].msg, 'Invalid Email Address');
//     //                         assert.equal(res.body.error[0].param, 'email')

//     //                     })
//     //             })
//     //         }

//     //     })

//     //     describe('For invalid userType', async () => {
//     //         for (let invalid of invalidBool) {
//     //             it('should throw error for userType ' + invalid, async () => {
//     //                 addReq.userType = invalid;
//     //                 return baseURL.post('/user/add')
//     //                     .set('Content-Type', 'application/json')
//     //                     .set('Accept', 'application/json')
//     //                     .send(addReq)
//     //                     .expect(400)
//     //                     .expect('Content-Type', 'application/json; charset=utf-8')
//     //                     .then(res => {
//     //                         expect(res.body).to.haveOwnProperty('message')
//     //                         //assert.equal(res.body.message, 'Validation failed');
//     //                         //expect(res.body).to.haveOwnProperty('error');
//     //                         //assert.equal(res.body.error[0].msg, User Type is required');
//     //                         //assert.equal(res.body.error[0].param, 'userType')
//     //                     })
//     //             })
//     //         }
//     //     })

//     // })

//     describe('User Edit', async () => {
//         updateObj = {}
//         beforeEach(async () => {
//             //clean db here
//             // done()
//             addReq = {
//                 "name": "Test retest",
//                 "email": "test@gmail.com",
//                 "BUID": "5ec4ef505ac27f2606841cfd",
//                 "userType": "1",
//                 // "_id": Object"5efaf33a9423916cd7ae0fe7"
//             }
//             await userSchema.remove({"$or":[{"name":addReq.name}, {"email":addReq.email}]})
            
//             let added = await new userSchema(addReq).save()
//             console.log("Added document in db", added)
//             updateObj = await userSchema.findOne({"name":addReq.name}, {"name":1, "email":1, "BUID":1, "userType":1})
//             updateObj = JSON.parse(JSON.stringify(updateObj))
//             if(updateObj)
//             {
//                 updateObj.userId = updateObj._id
//                 updateObj.userType = "Admin"
//             }
//             return 
//         })

//         describe('For Empty Body ', async () => {
//             for (let userId of invalidString) {
//                 it('should throw error for empty body' + userId, async () => {
//                     const emptyBody = {}
//                     return baseURL.post('/user/update')
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

//         describe('For Invalid Name', async () => {
//             for (let name of invalidString) {
//                 it('should throw error for name ' + name, async () => {
//                     updateObj["name"] = name;
//                     console.log("Sending for update", updateObj)
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');
//                             expect(res.body).to.haveOwnProperty('error');
//                             assert.equal(res.body.error[0].msg, 'Invalid value');
//                             assert.equal(res.body.error[0].param, 'name')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Name of type String', async () => {
//             for (let name of invalidInString) {
//                 it('should throw error for name ' + name, async () => {
//                     updateObj["name"] = name;
//                     // console.log("-----------------------------------------------------", updateObj)
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');
//                             expect(res.body).to.haveOwnProperty('error');
//                             assert.equal(res.body.error[0].msg, 'Invalid value');
//                             assert.equal(res.body.error[0].param, 'name')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Email', async () => {
//             for (let email of invalidString) {
//                 it('should throw error for email ' + email, async () => {
//                     updateObj["email"] = email;
//                     // // expected
//                     // {
//                     //     "message": "Validation failed",
//                     //     "error": [
//                     //         {
//                     //             "value": "",
//                     //             "msg": "email is required",
//                     //             "param": "email",
//                     //             "location": "body"
//                     //         }
//                     //     ]
//                     // }
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');
//                             expect(res.body).to.haveOwnProperty('error');
//                             assert.equal(res.body.error[0].msg, 'Invalid Email Address');
//                             assert.equal(res.body.error[0].param, 'email')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid Email of type String', async () => {
//             for (let email of invalidInString) {
//                 it('should throw error for email ' + email, async () => {
//                     updateObj["email"] = email;
                    
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');         
//                             expect(res.body).to.haveOwnProperty('error');
//                             assert.equal(res.body.error[0].msg, 'Invalid Email Address');
//                             assert.equal(res.body.error[0].param, 'email')
//                         })
//                 })
//             }

//         })

//         describe('For Invalid BUID', async () => {
//             for (let buid of invalidString) {
//                 it('should throw error for buid ' + buid, async () => {
//                     updateObj["BUID"] = buid;
//                     console.log("===========================================Sending for buid updated", updateObj)
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');
//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'Email id is required');
//                             assert.equal(res.body.error[0].param, 'BUID')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid BUID of Type String', async () => {
//             for (let buid of invalidInString) {
//                 it('should throw error for buid ' + buid, async () => {
//                     updateObj["BUID"] = buid
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');
//                             expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'BUID id is required');
//                             assert.equal(res.body.error[0].param, 'BUID')
//                         })
//                 })
//             }
//         })

//         describe('For invalid userType', async () => {
//             for (let invalid of invalidBool) {
//                 it('should throw error for userType ' + invalid, async () => {
//                     updateObj.userType = invalid;
//                     return baseURL.post('/user/update')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(updateObj)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             expect(res.body).to.haveOwnProperty('message')
//                             //assert.equal(res.body.message, 'Validation failed');
//                             //expect(res.body).to.haveOwnProperty('error');
//                             //assert.equal(res.body.error[0].msg, 'User Type is required');
//                             //assert.equal(res.body.error[0].param, 'userType')

//                         })
//                 })
//             }
//         })

//     })

//     // describe('User Delete', async () => {
//     //     before(async () => {
//     //         //clean db here
//     //         //done()
//     //     })

//     //     it('should throw error for user id ' + userId, async () => {
//     //         addReq["userId"] = userId
//     //         return baseURL.delete('/user/delete')
//     //             .set('Content-Type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send(addReq)
//     //             .expect(400)
//     //             .expect('Content-Type', 'application/json; charset=utf-8')
//     //             .then(res => {
//     //                 console.log("Ye aana chaiye", res.body)
//     //                 expect(res.body).to.haveOwnProperty('message')
//     //                 //assert.equal(res.body.message, 'Validation failed');
//     //                 expect(res.body).to.haveOwnProperty('error');
//     //                 //assert.equal(res.body.error[0].msg, 'BUID id is required');
//     //                 assert.equal(res.body.error[0].param, 'userId')
//     //             })
//     //     })
//     // })

//     // describe('User Update', async () => {
//     //     before(async () => {
//     //         //clean db here
//     //     })
//     //     it('user updation', async () => {
//     //         let users = await userSchema.find({}, { "name": 1 })
//     //         users = JSON.parse(JSON.stringify(users))
//     //         return baseURL.post('/user/update')
//     //             .set('Content-Type', 'application/json; charset=utf-8')
//     //             .send({
//     //                 "userId": "5efaf33a9423916cd7ae0fe7",
//     //                 "name": "Hitarth Joshiiiii updated",
//     //                 "email": "hitarth.osl@gmail.com",
//     //                 "BUID": "5ef574114b607f384c549234",
//     //                 "userType": "Admin"
//     //             })
//     //             .expect(200)
//     //             .then(res => {
//     //                 console.log("In user update, result", res.body.data)
//     //                 console.log("In user update, expected", users)
//     //             })
//     //     })
//     // })

// })
