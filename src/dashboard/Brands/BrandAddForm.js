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
    brandName:
      this.props.location.res == (null || undefined)
        ? ""
        : this.props.location.res.brandName,
    brandNameValid:
      this.props.location.res !== (null || undefined) ? true : false,
    brandNameInvalid: false,
    edit: false,
  };

  componentDidMount() {
    // this.fetchUser();
    // console.log("Props", this.props)
    if (
      this.props.location.edit != null ||
      this.props.location.edit != undefined
    ) {
      this.setState({
        edit: true,
      });
    }
  }

  handlebrandNameChange = (e) => {
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (
      e.target.value != "" &&
      e.target.value != null &&
      e.target.value.match(letters)
    ) {
      this.setState({
        brandName: e.target.value,
        brandNameValid: true,
        brandNameInvalid: false,
      });
    } else {
      this.setState({
        brandName: "",
        brandNameValid: false,
        brandNameInvalid: true,
      });
    }
  };

  handleSubmit = () => {
    // const alert = this.props.alert;

    if (this.state.brandNameValid) {
      let params = {};
      params.brandName = this.state.brandName;

      //console.log("params", params,  JSON.stringify(params.dueDate))
      if (this.state.edit) {
        params.BrandId = this.state.id;
        fetchPostApi("/updateBrand", params)
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
        fetchPostApi("/addBrand", params)
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
      // alert.show("Please fill all the required fields")
    }
  };

  handleReset = () => {
    this.setState({
      brandName: "",
      brandNameValid: false,
      brandNameInvalid: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>Add/Edit Brand Information</CardHeader>
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
                        Brand Name<span style={{ color: "red" }}>*</span>
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        id="text-input"
                        name="text-input"
                        onChange={(e) => this.handlebrandNameChange(e)}
                        value={this.state.brandName}
                        valid={this.state.brandNameValid}
                        invalid={this.state.brandNameInvalid}
                        placeholder="Enter Brand Name"
                      />
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

              <Link to="/admin/brands">
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
