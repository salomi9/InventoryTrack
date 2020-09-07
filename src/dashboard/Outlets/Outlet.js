import React, { Component } from "react";
import MaterialTable from "material-table";
import Header from "../../components/Headers/Header";
import { Container, Button } from "reactstrap";
import { fetchGetApi } from "../../constant/apiCall";
import { Link } from "react-router-dom";

const columns = [
  { title: "Name", field: "name" },
  { title: "Address", field: "address" },
  { title: "Phone No", field: "mobNo" },
  { title: "PSR", field: "psr" },
  { title: "Actions", field: "actions" },
];

const options = {
  exportButton: true,
  exportFileName: "usersData",
};

class App extends Component {
  state = {
    rowData: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const params = {};
    fetchGetApi("/fetchOutlets")
      .then((data) => {
        let modifiedData = [];
        if (data != null || (data != undefined && Array.isArray(data.data))) {
          data.data.map((res) => {
            modifiedData.push({
              name: res.name,
              address: res.address,
              mobNo: res.phoneNo,
              psr: res.psrName ? res.psrName : "Not Assigned",
              actions: (
                <Link
                  to={{
                    pathname: "/admin/outletForm",
                    res,
                    "edit" : true
                  }}
                >
                  <Button style={{ backgroundColor: "#11cdef", color: "#fff" }}>
                    Edit
                  </Button>
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
            <Link to="/admin/outletForm">
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
              title="Outlet Management"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default App;
