/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Login from "./views/examples/Login";
import SalesOrder from "dashboard/SalesOrderDashboard/SalesOrderDashboard";
import Brands from "dashboard/Brands/Brands";
import Outlets from "dashboard/Outlets/Outlet";
import Users from "dashboard/Users/Users";
import BrandAddForm from "dashboard/Brands/BrandAddForm";
import OutletForm from "dashboard/Outlets/OutletForm";
import UserForm from "dashboard/Users/UserForm";
import SalesOrderForm from "dashboard/SalesOrderDashboard/SalesOrderForm";
var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/salesOrderTable",
    name: "Sales Oders",
    icon: " ni ni-single-copy-04 text-primary",
    component: SalesOrder,
    layout: "/admin"
  },
  {
    path: "/brands",
    name: "Brands",
    icon: "ni ni-money-coins text-primary",
    component: Brands,
    layout: "/admin"
  },
  {
    path: "/outlets",
    name: "Outlets",
    icon: "ni ni-shop text-primary",
    component: Outlets,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-primary",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/brandAddForm",
    name: "Brand Add Form",
    icon: "ni ni-single-02 text-primary",
    component: BrandAddForm,
    layout: "/admin"
  },
  {
    path: "/outletForm",
    name: "Outlet Add/Edit Form",
    icon: "ni ni-single-02 text-primary",
    component: OutletForm,
    layout: "/admin"
  },
  {
    path: "/userForm",
    name: "User Add/Edit Form",
    icon: "ni ni-single-02 text-primary",
    component: UserForm,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-single-02 text-primary",
    component: Login,
    layout: "/auth"
  },
];
export default routes;
