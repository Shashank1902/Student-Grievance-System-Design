import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuthState } from "./context/ContextIndex";

import "./App.css";

import AdminLogin from "./Pages/AdminPanel/AdminLogin/AdminLogin";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";

function AdminDashboard() {
  const admin = useAuthState();

  return (
    <Router>
      <Switch>
        <Route exact path="/admin/dashboard">
          {admin.adminDetails ? <AdminPanel /> : <AdminLogin />}{" "}
        </Route>
        <Route path="/admin/login">
          {admin.adminDetails ? (
            <Redirect to="/admin/dashboard" />
          ) : (
            <AdminLogin />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default AdminDashboard;
