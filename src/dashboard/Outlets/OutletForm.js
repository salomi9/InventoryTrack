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
import { fetchPostApi } from "../../constant/apiCall";

class BasicForms extends React.Component {
  state = {
    id:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res._id,
    outletName:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.name,
    outletNameValid: this.props.location.res !== (null || undefined) ? true : false,
    outletNameInvalid:  false,

    phoneNo:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.phoneNo,
    phoneNoValid: this.props.location.res !== (null || undefined) ? true : false,
    phoneNoInvalid: false,

    address:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.address,
    addressValid: this.props.location.res !== (null || undefined) ? true : false,
    addressInvalid: false,

    psrNo:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.psrId,
    psrValid: this.props.location.res !== (null || undefined) ? true : false,
    psrInvalid: false,
    edit: false,
  };

  componentDidMount() {
    // this.fetchUser();
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

  handleoutletNameChange = (e) => {
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (
      e.target.value != "" &&
      e.target.value != null &&
      e.target.value.match(letters)
    ) {
      this.setState({
        outletName: e.target.value,
        outletNameValid: true,
        outletNameInvalid: false,
      });
    } else {
      this.setState({
        outletName: "",
        outletNameValid: false,
        outletNameInvalid: true,
      });
    }
  };

  handleoutletAddressChange = (e) => {
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (
      e.target.value != "" &&
      e.target.value != null &&
      e.target.value.match(letters)
    ) {
      this.setState({
        address: e.target.value,
        addressValid: true,
        addressInvalid: false,
      });
    } else {
      this.setState({
        address: "",
        addressValid: false,
        addressInvalid: true,
      });
    }
  };

  handleoutletNoChange = (e) => {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (e.target.value.match(phoneno)) {
      this.setState({
        phoneNo: e.target.value,
        phoneNoValid: true,
        phoneNoInvalid: false,
      });
    } else {
      this.setState({
        phoneNo: undefined,
        phoneNoInvalid: true,
        phoneNoValid: false,
      });
    }
  };

  handlePsrChange = (e) => {
    if (e.target.value != ("" && undefined)) {
      this.setState({
        psrNo: e.target.value,
        psrValid: true,
        psrInvalid: false,
      });
    } else {
      this.setState({
        psrNo: e.target.value,
        psrValid: false,
        psrInvalid: true,
      });
    }
  };

  handleSubmit = () => {
    // const alert = this.props.alert;

    console.log("This dot state", this.state);
    if (
      this.state.outletNameValid &&
      this.state.addressValid &&
      this.state.phoneNoValid &&
      this.state.psrValid
    ) {
      let params = {};
      params.name = this.state.outletName;
      params.address = this.state.address;
      params.phoneNo = this.state.phoneNo;
      params.psrId = this.state.psrNo;

      //console.log("params", params,  JSON.stringify(params.dueDate))
      if (this.state.edit) {
        params.outletId = this.state.id;
        fetchPostApi("/updateOutlet", params)
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
        fetchPostApi("/addOutlet", params)
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
      outletName: "",
      outletNameValid: false,
      outletNameInvalid: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>Add/Edit Outlet Information</CardHeader>
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
                      <Label htmlFor="text-input">
                        Outlet Name<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        id="text-input"
                        name="text-input"
                        onChange={(e) => this.handleoutletNameChange(e)}
                        value={this.state.outletName}
                        valid={this.state.outletNameValid}
                        invalid={this.state.outletNameInvalid}
                        placeholder="Enter Outlet Name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        Outlet Address<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        id="text-input"
                        name="text-input"
                        onChange={(e) => this.handleoutletAddressChange(e)}
                        value={this.state.address}
                        valid={this.state.addressValid}
                        invalid={this.state.addressInvalid}
                        placeholder="Enter Outlet Address"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        Outlet Contact No<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        onChange={(e) => this.handleoutletNoChange(e)}
                        value={this.state.phoneNo}
                        valid={this.state.phoneNoValid}
                        invalid={this.state.phoneNoInvalid}
                        placeholder="Enter Phone No"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        PSR<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        onChange={(e) => this.handlePsrChange(e)}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </FormGroup>
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
                {/* <CIcon name="cil-scrubber" /> */}
                Submit
              </Button>

              <Button
                type="reset"
                size="sm"
                color="danger"
                style={{ margin: "3px" }}
                onClick={this.handleReset}
              >
                {/* <CIcon name="cil-ban" /> */}
                Reset
              </Button>

              <Link to="/admin/outlets">
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
