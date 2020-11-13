import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  Container,
  TextArea,
} from "reactstrap";
import WEB_URL from "../../constant/custom";
import { withRouter, Link } from "react-router-dom";
import Header from "components/Headers/Header";
import { fetchPostApi, fetchGetApi } from "../../constant/apiCall";


let brandNames;
let addOrders = [];

class BasicForms extends React.Component {
  state = {
    id:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res._id,
    orderNo:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.salesOrderNo,
    orderNoValid:
      this.props.location.res !== (null || undefined) ? true : false,
    orderNoInvalid: false,

    orderDate:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.orderDate,
    orderDateValid:
      this.props.location.res !== (null || undefined) ? true : false,
    orderDateInvalid: false,

    psrNames: [],
    psrName:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.psrId,
    psrNameValid:
      this.props.location.res !== (null || undefined) ? true : false,
    psrNameInvalid: false,

    brand: [],
    brandName:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.brandId,

    brandNameValid:
      this.props.location.res !== (null || undefined) ? true : false,
    brandNameInvalid: false,

    size:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.size,
    sizeValid: this.props.location.res !== (null || undefined) ? true : false,
    sizeInvalid: false,

    quantity:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.quantity,
    quantityValid:
      this.props.location.res !== (null || undefined) ? true : false,
    quantityInvalid: false,

    outlets: [],
    outlet:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.outletId,
    outletValid: this.props.location.res !== (null || undefined) ? true : false,
    outletInvalid: false,

    edit: false,
    addOrders: [],


    orderFromOutlet: [],
    brandsOrder: [],
    sizeOrder: [],
    quantityOrder: []
  };

  componentDidMount() {
    this.fetchBrand();
    this.fetchPsr();
    this.fetchOutlet();
    console.log("Props", this.props);
    if (
      this.props.location.edit != null ||
      this.props.location.edit != undefined
    ) {
      this.setState({
        edit: true,
      });
    }
  }

  fetchBrand = () => {
    fetchGetApi("/fetchBrands")
      .then((data) => {
        if (data != null || data != undefined) {
          this.setState({
            brand: data.data,
          });
        }
      })
      .catch((e) => {
        console.log("Err", e);
      });
  };

  fetchPsr = () => {
    fetchGetApi("/fetchUsers")
      .then((data) => {
        if (data != null || data != undefined) {
          this.setState({
            psrNames: data.data,
          });
        }
      })
      .catch((e) => {
        console.log("Err", e);
      });
  };

  fetchOutlet = () => {
    fetchGetApi("/fetchOutlets")
      .then((data) => {
        if (data != null || data != undefined) {
          this.setState({
            outlets: data.data,
          });
        }
      })
      .catch((e) => {
        console.log("Err", e);
      });
  };

  handleorderNoChange = (e) => {
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (
      e.target.value != "" &&
      e.target.value != null &&
      e.target.value.match(letters)
    ) {
      this.setState({
        orderNo: e.target.value,
        orderNoValid: true,
        orderNoInvalid: false,
      });
    } else {
      this.setState({
        orderNo: "",
        orderNoValid: false,
        orderNoInvalid: true,
      });
    }
  };

  handleSize = (e) => {
    var letters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (e.target.value != "") {
      this.setState({
        size: e.target.value,
        sizeValid: true,
        sizeInvalid: false,
      });
    } else {
      this.setState({
        size: e.target.value,
        sizeValid: false,
        sizeInvalid: true,
      });
    }
  };

  handleBrand = (e) => {
    var letters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (e.target.value != "") {
      this.setState({
        brandName: e.target.value,
        brandNameValid: true,
        brandNameInvalid: false,
      });
    } else {
      this.setState({
        brandName: e.target.value,
        brandNameValid: false,
        brandNameInvalid: true,
      });
    }
  };

  handlePSR = (e) => {
    var letters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (e.target.value != "") {
      this.setState({
        psrName: e.target.value,
        psrNameValid: true,
        psrNameInvalid: false,
      });
    } else {
      this.setState({
        psrName: e.target.value,
        psrNameValid: false,
        psrNameInvalid: true,
      });
    }
  };

  handleQuantity = (e) => {
    // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (e.target.value != "") {
      this.setState({
        quantity: e.target.value,
        quantityValid: true,
        quantityInvalid: false,
      });
    } else {
      this.setState({
        quantity: undefined,
        quantityInvalid: true,
        quantityValid: false,
      });
    }
  };

  handleOutletName = (e) => {
    // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (e.target.value != "") {
      this.setState({
        outlet: e.target.value,
        outletValid: true,
        outletInvalid: false,
      });
    } else {
      this.setState({
        outlet: undefined,
        outletInvalid: true,
        outletValid: false,
      });
    }
  };

  handleOrderDate = (e) => {
    if (e.target.value != ("" && undefined)) {
      this.setState({
        orderDate: e.target.value,
        orderDateValid: true,
        orderDateInvalid: false,
      });
    } else {
      this.setState({
        orderDate: e.target.value,
        orderDateValid: false,
        orderDateInvalid: true,
      });
    }
  };

  brandOrder = (e) => {
    if (e.target.value != "" || e.target.value != null) {
      this.setState({
        brandsOrder: [...this.state.brandsOrder, e.target.value]
      })
    }
  }

  sizeOrder = (e) => {
    if (e.target.value != "" || e.target.value != null) {
      this.setState({
        sizeOrder: [...this.state.sizeOrder, e.target.value]
      })
    }
  }

  quantityOrder = (e) => {
    if (e.target.value != "" || e.target.value != null) {
      this.setState({
        quantityOrder: [...this.state.quantityOrder, e.target.value]
      })
    }
  }

  addOrder = () => {

    this.setState({
      addOrders: [...this.state.addOrders,
      <div key={this.state.addOrders} style={{ border: "2px solid #11cdef", borderRadius: "10px", marginBottom: "5%", padding: "3%" }}>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">
              Brand Name : <span style={{ color: "red" }}>*</span>
            </Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="select"
              // orderNo="select"
              id="exampleSelect"
              onChange={e => this.brandOrder(e)}
              // value={this.state.brandName}
              valid={this.state.brandNameValid}
              invalid={this.state.brandNameInvalid}
            >
              <option value="">Please Select a Brand</option>
              {brandNames}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">
              Size<span style={{ color: "red" }}>*</span>
            </Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="number"
              id="text-input"
              //  orderNo ="text-input"
              onChange={(e) => this.sizeOrder(e)}
              // value={this.state.size}
              valid={this.state.sizeValid}
              invalid={this.state.sizeInvalid}
              placeholder="Enter Size"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">
              Quantity<span style={{ color: "red" }}>*</span>
            </Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="number"
              id="text-input"
              // orderNo="text-input"
              onChange={(e) => this.quantityOrder(e)}
              // value={this.state.quantity}
              valid={this.state.quantityValid}
              invalid={this.state.quantityInvalid}
              placeholder="Enter Quantity"
            />
          </Col>
        </FormGroup>
      </div>
      ]
    },
      () => {
        console.log("Object of orders", this.state.orders)
        console.log("brands", this.state.brandsOrder)
        console.log("size", this.state.sizeOrder)
        console.log("quantity", this.state.quantityOrder)
      })
  };

  handleSubmit = () => {
    // const alert = this.props.alert;

    console.log("This dot state", this.state.brandsOrder);
    let temp = []
    for (let i = 0; i < this.state.brandsOrder.length; i++) {
      temp.push({
        "brand": this.state.brandsOrder[i],
        "size": this.state.sizeOrder[i],
        "quantity": this.state.quantityOrder[i]

      })
      console.log("HERE IS THE OUTPUT", temp)
    }
    console.log("HERE IS THE OUTPUT2", temp)
    if (
      this.state.orderDateValid &&
      this.state.psrNameValid &&
      this.state.outletValid &&
      this.state.brandNameValid &&
      this.state.sizeValid &&
      this.state.quantityValid
    ) {
      let params = {};
      //   params.salesOrderNo = this.state.orderNo;
      params.outletId = this.state.outlet;
      params.brandId = this.state.brandName;
      params.size = this.state.size;
      params.quantity = this.state.quantity;
      params.psrId = this.state.psrName;
      params.orderDate = this.state.orderDate;
      params.userType = "Admin"
      //console.log("params", params,  JSON.stringify(params.dueDate))
      if (this.state.edit) {
        params.salesOrderNo = this.state.orderNo;

        fetchPostApi("/editSalesOrder", params)
          .then((data) => {
            if (data.message != undefined) {
              alert(data.message);
            } else {
              alert("Internal Server Error !");
            }
          })

          .catch((error) => {
            console.log("inside TRForm", error);
          });
      } else {
        fetchPostApi("/addSalesOrder", params)
          .then((data) => {
            if (data.message != undefined) {
              alert(data.message);
            } else {
              alert("Internal Server Error !");
            }
          })

          .catch((error) => {
            console.log("inside TRForm", error);
          });
      }
    } else {
      //   alert.show("Please fill all the required fields")
    }
  };

  handleReset = () => {
    this.setState({
      orderNo: "",
      orderNoValid: false,
      orderNoInvalid: false,
    });
  };

  render() {
    // console.log("addOrders",addOrders)
    let brand = this.state.brand;
    // console.log("reason", brand);
    brandNames = brand.map((res, index) => (
      <option key={res._id} value={res._id}>
        {res.brandName}
      </option>
    ));

    let psrNames = this.state.psrNames;
    let psrs = psrNames.map((res, index) => (
      <option key={res._id} value={res._id}>
        {res.name}
      </option>
    ));

    let outletName = this.state.outlets;
    let outlets = outletName.map((res, index) => (
      <option key={res._id} value={res._id}>
        {res.name}
      </option>
    ));

    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>Add/Edit Sales Order Information</CardHeader>
            <CardBody>
              <Col xs="3"></Col>
              <Col xs="7">
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Order No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        id="text-input"
                        type="text"
                        disabled
                        onChange={(e) => this.handleorderNoChange(e)}
                        value={this.state.orderNo}
                        valid={this.state.orderNoValid}
                        invalid={this.state.orderNoInvalid}
                        placeholder="Order No"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        Order Date<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="text-input"
                        // orderNo="text-input"
                        onChange={(e) => this.handleOrderDate(e)}
                        value={this.state.orderDate}
                        valid={this.state.orderDateValid}
                        invalid={this.state.orderDateInvalid}
                        placeholder="Enter Order Date"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        PSR Name: <span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        // orderNo="select"
                        id="exampleSelect"
                        onChange={(e) => this.handlePSR(e)}
                        value={this.state.psrName}
                        valid={this.state.psrNameValid}
                        invalid={this.state.psrNameInvalid}
                      >
                        <option value="">Please Select a PSR</option>
                        {psrs}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        Outlet Name: <span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        // orderNo="select"
                        id="exampleSelect"
                        onChange={(e) => this.handleOutletName(e)}
                        value={this.state.outlet}
                        valid={this.state.outletValid}
                        invalid={this.state.outletInvalid}
                      >
                        <option value="">Please Select an Outlet</option>
                        {outlets}
                      </Input>
                    </Col>
                  </FormGroup>
                  <div style={{ border: "2px solid #11cdef", borderRadius: "10px", marginBottom: "5%", padding: "3%" }}>
                    <FormGroup row>

                      <Col md="3">
                        <Label htmlFor="text-input">
                          Brand Name : <span style={{ color: "red" }}>*</span>
                        </Label>
                      </Col>

                      <Col xs="12" md="9">
                        <Input
                          type="select"
                          // orderNo="select"
                          id="exampleSelect"
                          onChange={(e) => this.handleBrand(e)}
                          value={this.state.brandName}
                          valid={this.state.brandNameValid}
                          invalid={this.state.brandNameInvalid}
                        >
                          <option value="">Please Select a Brand</option>
                          {brandNames}
                        </Input>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">
                          Size<span style={{ color: "red" }}>*</span>
                        </Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          type="number"
                          id="text-input"
                          // orderNo="text-input"
                          onChange={(e) => this.handleSize(e)}
                          value={this.state.size}
                          valid={this.state.sizeValid}
                          invalid={this.state.sizeInvalid}
                          placeholder="Enter Size"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">
                          Quantity<span style={{ color: "red" }}>*</span>
                        </Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          type="number"
                          id="text-input"
                          // orderNo="text-input"
                          onChange={(e) => this.handleQuantity(e)}
                          value={this.state.quantity}
                          valid={this.state.quantityValid}
                          invalid={this.state.quantityInvalid}
                          placeholder="Enter Quantity"
                        />
                      </Col>
                    </FormGroup>
                  </div>
                  {this.state.addOrders}
                  <Button onClick={this.addOrder}>Add Order</Button>

                </Form>
              </Col>
            </CardBody>
            <CardFooter>
              <Button
                type="submit"
                size="sm"
                color="primary"
                style={{ margin: "3px" }}
                onClick={this.handleSubmit}
              >
                {/* <CIcon orderNo="cil-scrubber" /> */}
                Submit
              </Button>

              <Button
                type="reset"
                size="sm"
                color="danger"
                style={{ margin: "3px" }}
                onClick={this.handleReset}
              >
                {/* <CIcon orderNo="cil-ban" /> */}
                Reset
              </Button>

              <Link to="/admin/salesOrderTable">
                <Button
                  size="sm"
                  color="dark"
                  style={{ margin: "3px" }}
                // href="/src/dashboard/Bumanagement#/Bumanagement"
                >
                  Back
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Container>
      </>
    );
  }
}
export default withRouter(BasicForms);
