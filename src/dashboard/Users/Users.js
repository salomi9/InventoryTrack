import React, { Component } from "react";
import MaterialTable from "material-table";
import Header from "../../components/Headers/Header";
import { Container, Button } from "reactstrap";
import { fetchGetApi } from "../../constant/apiCall";
import {Link} from "react-router-dom";

const columns = [
  { title: "Name", field: "name" },
  { title: "Email", field: "email" },
  { title: "User Type", field: "userType" },
  { title: "Actions", field: "actions" },
];

const options = {
  exportButton: true,
  exportFileName: "usersData",
}
class App extends Component {
  state = {
    rowData: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const params = {};
    fetchGetApi("/fetchUsers")
      .then((data) => {
        let modifiedData = [];
        if (data != null || (data != undefined && Array.isArray(data.data))) {
          data.data.map((res) => {
            modifiedData.push({
              name: res.name,
              email: res.email,
              userType: res.userType,
              actions: (
                <Link
                  to={{
                    pathname: "/admin/userForm",
                    res,
                    "edit" : true
                  }}
                >
                  <Button style={{backgroundColor:"#11cdef", color:"#fff"}}>Edit</Button>
                </Link>
              ),
            });
          });
          this.setState({
            rowData: modifiedData,
          });
        } else {
          this.setState({
            rowData: [],
          });
        }
      })
      .catch((error) => {
        this.setState({
          apiloading: false,
        });
        alert("Server Error");
      });
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <div style={{ maxWidth: "100%" }}>
          <Link to="/admin/userForm">
              <Button
                style={{
                  zIndex: 100,
                  float: "right",
                  marginTop: "8px",
                  marginRight: "8px",
                  backgroundColor: "#11cdef",
                  color: "#fff",
                }}
              >
                Add
              </Button>
            </Link>
            <MaterialTable
              columns={columns}
              data={this.state.rowData}
              options={options}
              title="User Management"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default App;
