import React, { Component } from "react";
import MaterialTable from "material-table";
import Header from "../../components/Headers/Header";
import { Container, Button } from "reactstrap";
import { fetchPostApi } from "../../constant/apiCall";
import {Link} from "react-router-dom";

const columns = [
  { title: "Order No", field: "orderNo" },
  { title: "Order Date", field: "orderDate" },
  { title: "Outlet", field: "outlet" },
  { title: "PSR Name", field: "psrName" },
  { title: "Brand", field: "brand" },
  { title: "Size", field: "size" },
  { title: "Quantity", field: "quantity" },
  { title: "Last Updated" , field: "updatedDate"},
  { title: "Actions", field: "actions", export: false}
];

const options = {
  exportButton: true,
  exportFileName: "salesOrder",
};

class App extends Component {
  state = {
    rowData: [],
  };

  componentDidMount() {
    this.fetchSalesOrders();
  }

  fetchSalesOrders = () => {
    console.log("Fetching api", fetchPostApi(1, 2));
    const params = {};
    fetchPostApi("/fetchSalesOrderData", params)
      .then((data) => {
        let modifiedData = [];
        if (data != null || (data != undefined && Array.isArray(data.data))) {
          data.dataValue.map((res) => {
            modifiedData.push({
              orderNo: res.salesOrderNo,
              orderDate: res.orderDate,
              outlet: res.outletName,
              psrName: res.psrName,
              brand: res.brandName,
              size: res.size,
              quantity: res.quantity,
              updatedDate : res.updateDate,
              actions: (
                <Link
                  to={{
                    pathname: "/admin/salesOrderForm",
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
        alert(error);
      });
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <div style={{ maxWidth: "100%" }}>
          <Link to="/admin/salesOrderForm">
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
              title="Sales Orders"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default App;
