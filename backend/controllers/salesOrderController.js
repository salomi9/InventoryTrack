const { body, validationResult, check } = require("express-validator");
const validation = require("./validation");
const salesOrderSchema = require("../models/salesOrder.model");
const userSchema = require("../models/users.model");
const brandSchema = require("../models/brands.model");
const outletSchema = require("../models/outlets.model");
const moment = require("moment");

function salesOrderGenerator(todayDate) {
  try {
    console.log("todays date is", todayDate);
    let newSalesOrderNo = 0;
    return salesOrderSchema
      .find({}, { salesOrderNo: 1, orderDate: 1 })
      .sort({ salesOrderNo: 1 })
      .then(function (data) {
        console.log("ODERERRER", data);
        let lastTime;
        if (data.length > 0) {
          lastTime = moment(data[data.length - 1].orderDate).endOf("year");
        }
        if (data.length > 0 && moment(todayDate).isBefore(lastTime)) {
          //Use limit 1 for find

          //console.log("last salesOrder is", data[data.length - 1].salesOrderNo + 1)
          let incrementing = data[data.length - 1].salesOrderNo + 1;
          let salesOrder = incrementing.toString();
          let lastFour =
            salesOrder[2] + salesOrder[3] + salesOrder[4] + salesOrder[5];
          let yearDigits = moment().format("yyyy");
          let lastTwo = yearDigits[2] + yearDigits[3];
          newSalesOrderNo = parseInt(lastTwo + lastFour);
        } else {
          let yearDigits = moment(todayDate).format("yyyy");
          let lastTwo = yearDigits[2] + yearDigits[3];
          let lastFour = "0001";
          newSalesOrderNo = parseInt(lastTwo + lastFour);
          console.log("the new tciket no is", newSalesOrderNo);
        }
        console.log("the new salesOrder", newSalesOrderNo);
        return newSalesOrderNo;
      });
  } catch (e) {
    throw e;
  }
}

const salesOrder = {
  "Product Sales Representative": [
    "orderDate",
    "outletName",
    "psrId",
  ],
  "Admin": [
    "orderDate",
    "outletName",
    "brandName",
    "size",
    "quantity",
    "psrId"

  ],
};

module.exports = {
  // For adding the salesOrder datails by the admin
  addSalesOrder: function (req, res) {
    console.log("sesion is", req.session);
    console.log("brandName: ", req.body.brandName);

    console.log(
      "we are inside add salesOrder function",
      req.body.userType,
      moment().utc().add(5.5, "hours")
    );
    try {
      if (!(req.body.userType in USER_TYPES_S2I)) {
        return res.status(400).send({ message: "Invalid User Type" });
      }

      let salesOrderNo = 0;
      let todayDate = moment();

      //console.log("the today date is ",todayDate,typeof todayDate)
      salesOrderGenerator(todayDate)
        .then((data) => {
          // Check User type and set body obejct as per the user type
          let userType = req.body.userType;
          const newSalesOrder = {};
          let size = req.body.size;
          let quantity = req.body.quantity;
          let brandName = req.body.brandName;
          // let orderDetails = [];

          for (let value of salesOrder[userType]) {
            newSalesOrder[value] = req.body[value];
          }

          for (let i = 0; i < req.body.brandName.length; i++) {
            let orderDetails = {};

            orderDetails["brandName"] = req.body.brandName[i],
            orderDetails["size"] = req.body.size[i],
            orderDetails["quantity"] = req.body.quantity[i]
           
            newSalesOrder.salesOrderNo = data;
            newSalesOrder.orderFromOutlet = orderDetails;
            const salesOrderEntries = new salesOrderSchema(newSalesOrder);
            console.log("To be saved data: ", newSalesOrder)
            salesOrderEntries.save();
          }
          console.log("brandName: ", req.body.brandName);
          console.log("size: ", req.body.size);
          console.log("quantity: ", req.body.quantity);

          // newSalesOrder.salesOrderNo = data;
          // newSalesOrder.orderFromOutlet = orderDetails;
          // const salesOrderEntries = new salesOrderSchema(newSalesOrder);
          // console.log("To be saved data: ", newSalesOrder)
          // return salesOrderEntries.save();
        })
        .then((data) => {
          res.status(200).send({
            message: "SalesOrder Data has been added",
          });
        })
        .catch((err) => {
          if (err.code === 11000) {
            res.status(200).send({
              message: "Already added",
            });
          } else {
            console.log("error", err);
            res.status(400).send({
              message: "Invalid Data!",
            });
          }
        });
    } catch (e) {
      console.log("error is", e);
      return res.send({
        message: "Server Error!",
        error: e,
      });
    }
  },

  //Removing this functionality
  // For updating the salesOrder data by the admin
  editSalesOrder: function (req, res) {
    console.log("we are inside Edit salesOrder function");
    try {
      if (
        req.body.salesOrderNo !== null &&
        typeof req.body.salesOrderNo === "number" &&
        req.body.salesOrderNo.toString().length == 6
      ) {
        // Check User type and set body obejct as per the user type
        if (!(req.body.userType in USER_TYPES_S2I)) {
          return res.status(400).send({ message: "Invalid User Type" });
        }
        let userType = req.body.userType;
        const newSalesOrder = {
          updateDate: new Date(new Date().getTime() + 19800000),
        };
        for (let value of salesOrder[userType]) {
          newSalesOrder[value] = req.body[value];
        }
        console.log(
          "SalesOrder Details are",
          typeof req.body.salesOrderNo,
          newSalesOrder
        );

        salesOrderSchema
          .updateOne(
            { salesOrderNo: req.body.salesOrderNo },
            { $set: newSalesOrder },

          )
          .then((status) => {
            console.log("In here", status);
            if (status.n === 0) {
              res.status(200).send({ message: "Sales Order not found" });
            } else if (status.n === 1 && status.nModified == 0) {
              res.status(200).send({ message: "Sales Order already Updated" });
            } else {
              res
                .status(200)
                .send({ message: "Sales Order details updated successfully" });
            }
          })
          .catch((err) => {
            console.log("errr", err);
            if (err.code === 11000) {
              res.status(200).send({
                message: "Already added",
              });
            } else {
              res.status(400).send({
                message: "Invalid Data!",
              });
            }
          });

      } else {
        //const error =[]

        res.status(400).send({
          message: "SalesOrder No is required",
          error: "SalesOrder No is required",
        });
      }
    } catch (e) {
      console.log("error is", e);
      return res.send({
        message: "Server Error!",
        error: e,
      });
    }
  },

  fetchSalesOrderDatav2: function (req, res) {
    try {
      let outletId = [];
      let brandId = [];
      let psrId = [];
      salesOrderSchema
        .find({})
        .then((data) => {
          let dataValue = [{}];
          let iterator = 0;
          console.log("TICKETS", data);
          data = JSON.parse(JSON.stringify(data));
          if (data != undefined && data != null) {
            for (let i = 0; i < data.length; i++) {
              // outletId[i] = data[i].outletId;
              // brandId[i] = data[i].brandId;
              // psrId[i] = data[i].psrId;
              // console.log("OutletId: ",outletId[i])

              // console.log("psr",psrId)
              outletSchema
                .find(
                  {
                    _id: [data[i].outletId],
                  },
                  {
                    name: 1,
                  }
                )
                // .then((outletName) => {
                //   console.log("outname", outletName);
                //   //get brandName from the brand id
                //   brandSchema
                //     .find(
                //       {
                //         _id: data[i].brandId,
                //       },
                //       {
                //         brandName: 1,
                //       }
                //     )
                .then((outletName) => {
                  //   console.log("brand", brandName)
                  //appending brand name to data object
                  userSchema
                    .find(
                      {
                        _id: data[i].psrId,
                      },
                      {
                        name: 1,
                      }
                    )
                    .then((psrName) => {
                      console.log("psr name", psrName);
                      // appending psrName to data obejct

                      // for (let i = 0; i < data.length; i++) {
                      data[i].outletName = outletName[0].name;
                      // data[i].brandName = brandName[0].brandName;
                      data[i].psrName = psrName[0].name;
                      iterator++;
                      sendData(iterator);
                      // }
                      // console.log("Data from fetching ticket api", data);
                    })
                    // console.log("Mark 2", data);
                    .catch((err) => {
                      console.log("Catched err from finding Psr name", err);
                      res.status(400).send({
                        message: "Server Error In Fetch SalesOrder Data!",
                      });
                    });
                })
                .catch((err) => {
                  console.log("Catched err from finding Brand name", err);
                  res.status(400).send({
                    message: "Server Error In Fetch SalesOrder Data!",
                  });
                });
              // })
              // .catch((err) => {
              //   console.log("Catched err from finding outlet name", err);
              //   res.status(400).send({
              //     message: "Server Error In Fetch SalesOrder Data!",
              //   });
              // });
            }

            function sendData(j) {
              if (j == data.length) {
                res.status(200).send({
                  "dataValue": data
                });
              }
            }
          }
        })
        .catch((err) => {
          console.log("Catched err from finding tickets", err);
          res
            .status(400)
            .send({ message: "Server Error In Fetch SalesOrder Data!" });
        });
    } catch (e) {
      console.log("error is", e);
      return res.status(400).send({
        message: "Server Error In Fetch SalesOrder Data!",
        error: e,
      });
    }
  },


  fetchSalesOrderData: function (req, res) {
    try {
      let outletId = [];
      let brandId = [];
      let psrId = [];
      salesOrderSchema
        .find({})
        .then((data) => {
          let dataValue = [{}];
          let iterator = 0;
          console.log("TICKETS", data);
          data = JSON.parse(JSON.stringify(data));
          if (data != undefined && data != null) {
            for (let i = 0; i < data.length; i++) {
              // outletId[i] = data[i].outletId;
              // brandId[i] = data[i].brandId;
              // psrId[i] = data[i].psrId;
              // console.log("OutletId: ",outletId[i])

              // console.log("psr",psrId)
              outletSchema
                .find(
                  {
                    _id: [data[i].outletId],
                  },
                  {
                    name: 1,
                  }
                )
                .then((outletName) => {
                  console.log("outname", outletName);
                  //get brandName from the brand id
                  brandSchema
                    .find(
                      {
                        _id: data[i].brandId,
                      },
                      {
                        brandName: 1,
                      }
                    )
                    .then((brandName) => {
                      //   console.log("brand", brandName)
                      //appending brand name to data object
                      userSchema
                        .find(
                          {
                            _id: data[i].psrId,
                          },
                          {
                            name: 1,
                          }
                        )
                        .then((psrName) => {
                          console.log("psr name", psrName);
                          // appending psrName to data obejct

                          // for (let i = 0; i < data.length; i++) {
                          data[i].outletName = outletName[0].name;
                          data[i].brandName = brandName[0].brandName;
                          data[i].psrName = psrName[0].name;
                          iterator++;
                          sendData(iterator);
                          // }
                          // console.log("Data from fetching ticket api", data);
                        })
                        // console.log("Mark 2", data);
                        .catch((err) => {
                          console.log("Catched err from finding Psr name", err);
                          res.status(400).send({
                            message: "Server Error In Fetch SalesOrder Data!",
                          });
                        });
                    })
                    .catch((err) => {
                      console.log("Catched err from finding Brand name", err);
                      res.status(400).send({
                        message: "Server Error In Fetch SalesOrder Data!",
                      });
                    });
                })
                .catch((err) => {
                  console.log("Catched err from finding outlet name", err);
                  res.status(400).send({
                    message: "Server Error In Fetch SalesOrder Data!",
                  });
                });
            }

            function sendData(j) {
              if (j == data.length) {
                res.status(200).send({
                  "dataValue": data
                });
              }
            }
          }
        })
        .catch((err) => {
          console.log("Catched err from finding tickets", err);
          res
            .status(400)
            .send({ message: "Server Error In Fetch SalesOrder Data!" });
        });
    } catch (e) {
      console.log("error is", e);
      return res.status(400).send({
        message: "Server Error In Fetch SalesOrder Data!",
        error: e,
      });
    }
  },

  //   fetchSalesOrderData: function (req, res) {
  //     try {
  //       return salesOrderSchema
  //         .aggregate([
  //           {
  //             $lookup: {
  //               from: "businessUnits",
  //               localField: "BUID",
  //               foreignField: "_id",
  //               as: "bu",
  //             },
  //           },
  //           {
  //             $unwind: "$bu",
  //           },
  //           {
  //             $project: {
  //               salesOrderNo: 1,
  //               customerEmail: 1,
  //               customerName: 1,
  //               customerAddress: 1,
  //               customerMNo: 1,
  //               customerComplain: 1,
  //               BUID: 1,
  //               BUName: "$bu.BUName",
  //               isValid: 1,
  //               inWarranty: 1,
  //               status: 1,
  //               remarks: 1,
  //               actionTaken: 1,
  //               delayReason: 1,
  //               orderDate: 1,
  //               closingDate: 1,
  //               dueDate: 1,
  //               assigningDate: 1,
  //               teamRepresentative: 1,
  //               assignedMember: 1,
  //               modeOfSupport: 1,
  //               priority: 1,
  //               updatedDate: 1,
  //               salesOrderType: 1,
  //             },
  //           },
  //         ])
  //         .then((data) => {
  //           let teamMemId = [];
  //           console.log("statssss", data);
  //           for (let i = 0; i < data.length; i++) {
  //             (data[i].status = TICKET_STATUS_I2S[data[i].status]),
  //               (data[i].priority = TICKET_PRIORITY_I2S[data[i].priority]),
  //               (data[i].salesOrderType =
  //                 TICKET_TYPE_I2S[data[i].salesOrderType]),
  //               (data[i].modeOfSupport =
  //                 MODE_OF_SUPPORT_I2S[data[i].modeOfSupport]);

  //             if (data[i].teamRepresentative !== null) {
  //               teamMemId.push(data[i].teamRepresentative);
  //             }
  //             if (data[i].assignedMember !== null) {
  //               teamMemId.push(data[i].assignedMember);
  //             }
  //           }
  //           userSchema
  //             .find(
  //               {
  //                 _id: {
  //                   $in: teamMemId,
  //                 },
  //               },
  //               {
  //                 name: 1,
  //               }
  //             )
  //             .then((users) => {
  //               console.log("response is", users);
  //               var obj = {};
  //               for (var i = 0; i < users.length; i++) {
  //                 console.log("resi", users[i]._id, users[i].name);
  //                 obj[users[i]._id] = users[i].name;
  //               }
  //               data = JSON.parse(JSON.stringify(data));
  //               console.log("the obje is", obj, obj[data[0].teamRepresentative]);
  //               data[0]["teamRepresentativeName"] =
  //                 obj[data[0].teamRepresentative];
  //               console.log("sakjnjsn", data[0]["teamRepresentativeName"]);
  //               for (let j in data) {
  //                 if (
  //                   data[j].teamRepresentative !== null &&
  //                   data[j].teamRepresentative !== undefined
  //                 ) {
  //                   console.log(
  //                     "insideif",
  //                     data[j].teamRepresentative,
  //                     obj[data[j].teamRepresentative]
  //                   );
  //                   data[j]["teamRepresentativeName"] =
  //                     obj[data[j].teamRepresentative];
  //                   console.log("messs2", data[j].teamRepresentativeName);
  //                 }
  //                 if (
  //                   data[j].assignedMember !== null &&
  //                   data[j].assignedMember !== undefined
  //                 ) {
  //                   console.log(
  //                     "insideif2",
  //                     data[j].assignedMember,
  //                     obj[data[j].assignedMember]
  //                   );
  //                   data[j]["assignedMemberName"] = obj[data[j].assignedMember];
  //                   console.log("messs1", data[j].assignedMemberName);
  //                 }
  //               }
  //               console.log(
  //                 "data from fetch api is",
  //                 data.length,
  //                 req.session.userType,
  //                 req.session.BUID,
  //                 req.session.uid
  //               );
  //               const dataValue = [];

  //               if (
  //                 req.session.userType == "Team Manager" ||
  //                 req.session.userType == "BU Owner"
  //               ) {
  //                 console.log("inside first if");
  //                 for (let i = 0; i < data.length; i++) {
  //                   if (data[i].BUID == req.session.BUID) {
  //                     console.log("inside second if", data[i]);
  //                     dataValue.push(data[i]);
  //                   }
  //                 }
  //               } else if (req.session.userType == "Engineer") {
  //                 console.log("inside first if");
  //                 for (let i = 0; i < data.length; i++) {
  //                   console.log(
  //                     "dddddddddddddd",
  //                     req.session.uid,
  //                     data[i].assignedMember
  //                   );
  //                   if (data[i].assignedMember == req.session.uid) {
  //                     console.log("inside second if", data[i]);
  //                     dataValue.push(data[i]);
  //                   }
  //                 }
  //               } else {
  //                 return res.status(200).send({ dataValue: data });
  //               }
  //               return res.status(200).send({ dataValue });
  //             })
  //             .catch((err) => {
  //               console.error(err);
  //               res
  //                 .status(400)
  //                 .send({ message: "Server Error In Fetch SalesOrder Data!" });
  //             });
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //           res
  //             .status(400)
  //             .send({ message: "Server Error In Fetch SalesOrder Data!" });
  //         });
  //     } catch (e) {
  //       console.log("catchedErr", e);
  //       res.status(400).send({
  //         message: "Server Error In Fetch SalesOrder Data!",
  //       });
  //     }
  //   },
};
