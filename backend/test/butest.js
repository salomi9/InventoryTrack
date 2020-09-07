// let buSchema = null //require('../models/BU.model')

// const invalidInString = ["001323", "A", "null", "undefined", "error"]
// const invalidString = [null, Error, new Date(), undefined, { "$gte": "" }, 123]
// const invalidBool = [null, Error, new Date(), undefined, { "$gte": "" }, 1, 0, {}, NaN]
// const userTypes = ["Team Member", "BU Representative", "Team Representative", "Admin", "Management"]
// const invalidObjectId = ["AZXSD", "1234", 1235.63, null, undefined, new Error(""), new Date(), "0x325", {}]
// const ObjectId = require('mongoose').Types.ObjectId;

// const addReq = {
//     "BUName": "Process Engineering Services",
//     "buId": "5ef574114b607f384c549233",
//     "BURPID": "5ef574114b607f384c549233"
// }

// describe('BU Test module', async () => {
//     beforeEach(async () => {
//         buSchema = require('../models/bu.model')
//         return buSchema.remove({ "buId": ObjectId(addReq.buId) });
//     })

//     describe('BU Fetch', async () => {
//         it('should give array of BU', async () => {
//             let invalidAlls = ["1", 0, "", null, undefined, new Object()]
//             for (let invalall of invalidAlls) {
//                 it('All input', async () => {
//                     const parameter = {
//                         "all": invalall
//                     }
//                     let buSchema = await buSchema.find({}, {})
//                     buSchema = JSON.parse(JSON.stringify(BU))
//                     return baseURL.get('/bu/fetch')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(parameter)
//                         .expect(200)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye cheeze aayi", res.body.data)
//                             console.log("Ye aana chaiye", BU)
//                             expect(res.body).to.haveOwnProperty('data')
//                             console.log("length", res.body.data.length, BU.length)
//                             expect(res.body.data).to.a('array').have.lengthOf(BU.length)
//                             expect(res.body.data).to.have.deep.members(BU)
//                         })
//                 })
//             }
//         })
//     })

//     describe('BU Add', async () => {
//         // before(async () => {
//         //     //clean db here 
//         //     // done() 
//         // })

        
//         describe('For Normal Inputs', async () => {
//             it('should return success Message', async () => {
//                 return baseURL.post('/bu/add')
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
//                 return baseURL.post('/bu/add')
//                     .set('Content-Type', 'application/json')
//                     .set('Accept', 'application/json')
//                     .send(addReq)
//                     .expect(200)
//                     .expect('Content-Type', 'application/json; charset=utf-8')
//                     .then(res => {
//                         expect(res.body).to.haveOwnProperty('message')
//                         // assert.equal(res.body.message, 'Already added');
//                     })
//             })
//         })

//         describe('For Empty Body ', async () => {
//             it('should throw error for empty body', async () => {
//                 const emptyBody = {}
//                 return baseURL.post('/bu/add')
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

//         describe('For Invalid BUName', async () => {
//             for (let BUName of invalidInString) {
//                 it('throws error for invalid BU BUName ' + BUName, async () => {
//                     addReq["BUName"] = BUName;
//                     return baseURL.post('/bu/add')
//                         .set('Content-Type', 'application/json')
//                         .set('Accept', 'application/json')
//                         .send(addReq)
//                         .expect(400)
//                         .expect('Content-Type', 'application/json; charset=utf-8')
//                         .then(res => {
//                             console.log("Ye aana chaiye----------------------------------------------------", res.body)
//                             expect(res.body).to.haveOwnProperty('message')
//                             expect(res.body).to.haveOwnProperty('error');
//                             assert.equal(res.body.error[0].msg, 'BUName is Required');
//                             assert.equal(res.body.error[0].param, 'BUName')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid BUName of type String', async () => {
//             for (let BUName of invalidInString) {
//                 it('should throw error for BUName ' + BUName, async () => {
//                     addReq["BUName"] = BUName;
//                     return baseURL.post('/bu/add')
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
//                             assert.equal(res.body.error[0].msg, 'BUName is Required');
//                             assert.equal(res.body.error[0].param, 'BUName')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid BURPID', async () => {
//             for (let BURPID of invalidString) {
//                 it('should throw error for BURPID ' + BURPID, async () => {
//                     addReq["BURPID"] = BURPID;
//                     return baseURL.post('/bu/add')
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
//                             assert.equal(res.body.error[0].param, 'BURPID')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid BURPID of Type String', async () => {
//             for (let BURPID of invalidInString) {
//                 it('should throw error for BURPID ' + BURPID, async () => {
//                     addReq["BURPID"] = BURPID
//                     return baseURL.post('/bu/add')
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
//                             assert.equal(res.body.error[0].param, 'BURPID')
//                         })
//                 })
//             }
//         })

//     })

//     describe('BU Edit', async () => {
//         // before(async () => {
//         //     //clean db here
//         //     // done()
//         // })

//         describe('For Empty Body ', async () => {
//             for (let buId of invalidString) {
//                 it('should throw error for empty body' + buId, async () => {
//                     const emptyBody = {}
//                     return baseURL.post('/bu/update')
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

//         describe('For Invalid BUName', async () => {
//             for (let BUName of invalidString) {
//                 it('should throw error for BUName ' + BUName, async () => {
//                     addReq["BUName"] = BUName;
//                     return baseURL.post('/bu/update')
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
//                             assert.equal(res.body.error[0].msg, 'Business unit name is required');
//                             assert.equal(res.body.error[0].param, 'BUName')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid BUName of type String', async () => {
//             for (let BUName of invalidInString) {
//                 it('should throw error for BUName ' + BUName, async () => {
//                     addReq["BUName"] = BUName;
//                     return baseURL.post('/bu/update')
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
//                             assert.equal(res.body.error[0].msg, 'Invalid value');
//                             assert.equal(res.body.error[0].param, 'BUName')

//                         })
//                 })
//             }
//         })

//         describe('For Invalid buId', async () => {
//             for (let buId of invalidString) {
//                 it('should throw error for buid ' + buId, async () => {
//                     addReq["buId"] = buId;
//                     return baseURL.post('/bu/update')
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
//                             assert.equal(res.body.error[0].param, 'buId')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid buId of Type String', async () => {
//             for (let buId of invalidInString) {
//                 it('should throw error for buid ' + buId, async () => {
//                     addReq["buIdD"] = buId
//                     return baseURL.post('/bu/update')
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
//                             //assert.equal(res.body.error[0].msg, 'BUID id is required');
//                             assert.equal(res.body.error[0].param, 'buId')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid BURPID', async () => {
//             for (let BURPID of invalidString) {
//                 it('should throw error for BURPID ' + BURPID, async () => {
//                     addReq["BURPID"] = BURPID;
//                     return baseURL.post('/bu/update')
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
//                             assert.equal(res.body.error[0].param, 'BURPID')
//                         })
//                 })
//             }
//         })

//         describe('For Invalid BURPID of Type String', async () => {
//             for (let BURPID of invalidInString) {
//                 it('should throw error for BURPID ' + BURPID, async () => {
//                     addReq["BURPID"] = BURPID
//                     return baseURL.post('/bu/update')
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
//                             //assert.equal(res.body.error[0].msg, 'BUID id is required');
//                             assert.equal(res.body.error[0].param, 'BURPID')
//                         })
//                 })
//             }
//         })

//     })

//     describe('BU Delete', async () => {
//         // before(async () => {
//         //     //clean db here
//         //     //done()
//         // })

//         it('should throw error for BU id ' + userId, async () => {
//             addReq["buId"] = buId
//             return baseURL.delete('/bu/delete')
//                 .set('Content-Type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send(addReq)
//                 .expect(400)
//                 .expect('Content-Type', 'application/json; charset=utf-8')
//                 .then(res => {
//                     console.log("Ye aana chaiye", res.body)
//                     expect(res.body).to.haveOwnProperty('message')
//                     //assert.equal(res.body.message, 'Validation failed');
//                     expect(res.body).to.haveOwnProperty('error');
//                     //assert.equal(res.body.error[0].msg, 'BUID id is required');
//                     assert.equal(res.body.error[0].param, 'buId')
//                 })
//         })
//     })

//     // describe('BU Update', async () => {
//     //     before(async () => {
//     //         //clean db here
//     //     })
//     //     it('BU updation', async () => {
//     //         let BU = await buSchema.find({}, { "BUName": 1 })
//     //         BU = JSON.parse(JSON.stringify(BU))
//     //         return baseURL.post('/bu/update')
//     //             .set('Content-Type', 'application/json; charset=utf-8')
//     //             .send({
//     //                 "userId": "5efaf33a9423916cd7ae0fe7",
//     //                 "BUName": "Hitarth Joshiiiii updated",
//     //                 "email": "hitarth.osl@gmail.com",
//     //                 "BUID": "5ef574114b607f384c549234",
//     //                 "userType": "Admin"
//     //             })
//     //             .expect(200)
//     //             .then(res => {
//     //                 console.log("In BU update, result", res.body.data)
//     //                 console.log("In BU update, expected", BU)
//     //             })
//     //     })
//     // })

// })
