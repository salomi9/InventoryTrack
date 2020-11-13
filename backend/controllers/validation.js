const { check, validationResult } = require("express-validator/check");

const salesOrder = {
  "Product Sales Representative": [
    "orderDate",
    "outletName",
    "brandName",
    "size",
    "quantity",
    "psrId",
  ],
  Admin: [],
};

const salesOrderValidator = {
  outletName: check("outletName")
    .exists()
    .withMessage("outletId is required is Required")
    .bail()
    .trim()
    .isString()
    .withMessage("It Should be String"),

  brandName: check("brandName")
    .exists()
    .withMessage("brandId is Required")
    // .bail()
    // .trim()
    // .isString()
    .withMessage("It should be string"),

  psrId: check("psrId")
    .exists()
    .withMessage("psrId is required")
    .bail()
    .trim()
    .isString()
    .withMessage("It Should be String"),

  orderDate: check("orderDate")
    .exists()
    .withMessage("Order Date is required")
    .bail()
    // .isDate()
    .withMessage("Not a valid date"),

  size: check("size")
    .isNumeric()
    .exists()
    .withMessage("size is required")
    .bail()
    .withMessage("Not a valid size"),

  quantity: check("quantity")
    .isNumeric()
    .exists()
    .withMessage("quantity is required")
    .bail()
    .withMessage("Not a valid quantity"),

  userType: check("userType")
    .exists()
    .withMessage("userType is Required")
    .bail()
    .trim()
    .isString()
    .withMessage("It should be string"),
};

async function validateInput(req, res, next) {
  console.log(
    "the validate input function is called",
    req.body.userType,
    req.body.assignedMember
  );
  try {
    if (
      req.body.userType !== null &&
      typeof req.body.userType === "string" &&
      req.body != null
    ) {
      for (let value of salesOrder[req.body.userType]) {
        // console.log("keyssss", salesOrderValidator[value]);
        await salesOrderValidator[value].run(req);
      }
      var errors = validationResult(req);
      console.log("The Errors are", errors);

      if (!errors.isEmpty()) {
        res
          .status(400)
          .send({ message: "Validation failed", error: errors.errors });
      } else {
        next();
      }
    } else {
      res.status(400).send({
        message: "Bad Request",
        error: "error",
      });
    }
  } catch (e) {
    console.log("The error is", e);
    res.status(422).json();
  }
}

module.exports = {
  validateInput,
  salesOrderValidator,
};
