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
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import { positions, Provider as Alert } from "react-alert";
import AlertTemplate from "react-alert-template-mui";


import { Provider } from 'react-redux'
import store from './store';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const options = {
  timeout: 5000,
  position: positions.BOTTOM_TOP,
  containerStyle: {
    zIndex: 100,
    // backgroundColor: "red"
  },
  background: 'red'
}

let persistor = persistStore(store)

ReactDOM.render(
  <Alert template={AlertTemplate} {...options}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          {/* <Redirect from="/" to="/admin/index" /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </Alert>
  ,
  document.getElementById("root")
);
