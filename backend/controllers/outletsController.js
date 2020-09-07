// const outletSchema = require("../models/outlets.model");
const ObjectId = require("mongoose").Types.ObjectId;
const outletSchema = require("../models/outlets.model");
const regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i;

const { check, validationResult } = require("express-validator");

const name = check("name")
  .notEmpty()
  .withMessage("Outlet Name is required")
  .bail()
  .trim()
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("Invalid value")
  .bail()
  .isLength({ min: 2 })
  .withMessage("Invalid value");

const address = check("address")
  .notEmpty()
  .withMessage("Outlet Address is required")
  .bail()
  .trim()
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("Invalid value")
  .bail()
  .isLength({ min: 2 })
  .withMessage("Invalid value");

const phoneNo = check("phoneNo")
  .exists()
  .withMessage("Mobile Number is required")
  .bail()
  .isNumeric()
  .withMessage("Mobile Numbers Should Contain Numerics");

const psrId = check("psrId")
  .notEmpty()
  .withMessage("PSR Id is required")
  .bail()
  .trim()
  .isMongoId()
  .withMessage("Invalid value");

  const outletId = check("outletId")
  .notEmpty()
  .withMessage("Outlet Id is required")
  .bail()
  .trim()
  .isMongoId()
  .withMessage("Invalid value");

const outletAddValidator = [name, address, phoneNo, psrId];

const outletUpdateValidator = [name, address, psrId, phoneNo, outletId];

const outletDeleteValidator = [outletId];

function sendValidator(req, res) {
  const errors = validationResult(req);
  // console.log("insied bu add api", errors)
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ message: "Validation failed", error: errors.errors });
  }
  return;
}

function addOutlet(req, res) {
  try {
    sendValidator(req, res);
    const newOutlet = {
      name: req.body.name,
      address: req.body.address,
      phoneNo: req.body.phoneNo,
      psrId : req.body.psrId
    };
    const newOutletSchema = new outletSchema(newOutlet);

    newOutletSchema
      .save()
      .then((status) => {
        console.log("update", status);
        return res
          .status(200)
          .send({ message: "New Outlet added successfully" });
      })
      .catch((err) => {
        // console.error("-------------", err, err.code)
        // console.log("-------", err.message.split(".$"))

        // match =  err.message.match(regex),
        // indexName = match[1] || match[2];
        // console.log("mathce", match)
        // console.log("IndexName", indexName)
        // console.log("err.json", err.json())
        if (err.code == 11000) {
          return res.status(400).send({ message: "Already added!" });
        } else {
          return res.status(400).send({ message: "Server Error!" });
        }
      });
  } catch (e) {
    console.log("catchedErr", e);
    return res.status(400).send({
      message: "Server Error",
    });
  }
}

function updateOutlet(req, res) {
  try {
    sendValidator(req, res);
    const OutletId = req.body.outletId;
    const newOutlet = {
        name: req.body.name,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
        psrId : req.body.psrId
    };

    outletSchema
      .update({ _id: ObjectId(OutletId) }, { $set: newOutlet })
      .then((status) => {
        console.log("outlet schema updatE", status);
        if (status.nModified == 1 || status.n > 0) {
          return res
            .status(200)
            .send({ message: "Outlet updated successfully" });
        } else {
          return res.status(200).send({ message: "Outlet not found" });
        }
      })
      .catch((err) => {
        console.log("error catched", err);
        if (err.code === 11000) {
          return res
            .status(400)
            .send({ message: "Outlet updated successfully" });
        } else {
          return res.status(400).send({ message: "Server Error!" });
        }
      });
  } catch (e) {
    console.log("catchedErr", e);
    return res.status(400).send({
      message: "Server Error",
    });
  }
}

function fetchOutlet(req, res) {
  try {
    outletSchema
      .find({}, {})
      .then((data) => {
        return res.status(200).send({ data });
      })
      .catch((err) => {
        console.errore(err);
        return res.status(400).send({ message: "Server Error!" });
      });
  } catch (e) {
    console.log("catchedErr", e);
    return res.status(400).send({
      message: "Server Error",
    });
  }
}

function deleteOutlet(req, res) {
  try {
    sendValidator(req, res);
    const OutletId = req.body.outletId;
    outletSchema
      .remove({ _id: ObjectId(OutletId) })
      .then((status) => {
        console.log(status);
        return res
          .status(200)
          .send({ message: "Outlet deleted successfully", status });
      })
      .catch((err) => {
        console.errore(err);
        return res.status(400).send({ message: "Server Error!" });
      });
  } catch (e) {
    console.log("catchedErr", e);
    return res.status(400).send({
      message: "Server Error",
    });
  }
}

module.exports = {
  addOutlet,
  updateOutlet,
  deleteOutlet,
  fetchOutlet,
  outletAddValidator,
  outletDeleteValidator,
  outletUpdateValidator,
};
