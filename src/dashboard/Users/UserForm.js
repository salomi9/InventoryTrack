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
    name:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.name,
    nameValid: this.props.location.res !== (null || undefined) ? true : false,
    nameInvalid:  false,

    phoneNo:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.phoneNo,
    phoneNoValid: this.props.location.res !== (null || undefined) ? true : false,
    phoneNoInvalid: false,

    email:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.email,
    emailValid: this.props.location.res !== (null || undefined) ? true : false,
    emailInvalid: false,

    userType:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.userType,
    usertypeValid: this.props.location.res !== (null || undefined) ? true : false,
    usertypeInvalid: false,
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

  handlenameChange = (e) => {
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (
      e.target.value != "" &&
      e.target.value != null &&
      e.target.value.match(letters)
    ) {
      this.setState({
        name: e.target.value,
        nameValid: true,
        nameInvalid: false,
      });
    } else {
      this.setState({
        name: "",
        nameValid: false,
        nameInvalid: true,
      });
    }
  };

  handleEmailChange = (e) => {
    var letters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/.test(e.target.value)
    ) {
      this.setState({
        email: e.target.value,
        emailValid: true,
        emailInvalid: false,
      });
    } else {
      this.setState({
        email: e.target.value,
        emailValid: false,
        emailInvalid: true,
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

  handleUserTypeChange = (e) => {
    if (e.target.value != ("" && undefined)) {
      this.setState({
        userType: e.target.value,
        usertypeValid: true,
        usertypeInvalid: false,
      });
    } else {
      this.setState({
        userType: e.target.value,
        usertypeValid: false,
        usertypeInvalid: true,
      });
    }
  };

  handleSubmit = () => {
    // const alert = this.props.alert;

    console.log("This dot state", this.state);
    if (
      this.state.nameValid &&
      this.state.emailValid &&
      this.state.usertypeValid
    ) {
      let params = {};
      params.name = this.state.name;
      params.email = this.state.email;
      params.userType = this.state.userType;

      //console.log("params", params,  JSON.stringify(params.dueDate))
      if (this.state.edit) {
        params.userId = this.state.id;
        fetchPostApi("/updateUser", params)
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
        fetchPostApi("/addUser", params)
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
      name: "",
      nameValid: false,
      nameInvalid: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>Add/Edit User Information</CardHeader>
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
                        Name<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        id="text-input"
                        name="text-input"
                        onChange={(e) => this.handlenameChange(e)}
                        value={this.state.name}
                        valid={this.state.nameValid}
                        invalid={this.state.nameInvalid}
                        placeholder="Enter User's Name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        Email<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="email"
                        id="text-input"
                        name="text-input"
                        onChange={(e) => this.handleEmailChange(e)}
                        value={this.state.email}
                        valid={this.state.emailValid}
                        invalid={this.state.emailInvalid}
                        placeholder="Enter User's Email Id"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">
                        User Type<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        onChange={(e) => this.handleUserTypeChange(e)}
                      >
                        <option>Admin</option>
                        <option>Product Sales Representative</option>
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

              <Link to="/admin/users">
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
