import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./adminlogin.css";

import {
  loginAdmin,
  useAuthDispatch,
  useAuthState,
} from "../../../context/ContextIndex";

const AdminLogin = () => {
  const email = useRef("null");
  const password = useRef("null");
  let history = useHistory();

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminEmail = email.current.value;
    const adminPassword = password.current.value;

    try {
      let response = await loginAdmin(dispatch, {
        email: adminEmail,
        password: adminPassword,
      });
      if (!response) return;
      history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-login-cont">
      <div className="admin-login-title-cont">
        <div className="admin-login-title">
          <span className="angular-login">&lt;</span>
          <span>em</span>
          <span className="angular-login">&gt;</span>
          <span>brace</span>
        </div>
      </div>
      <div className="admin-login-form-container">
        <div className="admin-login-box">
          <div className="admin-login-heading-box">
            <h2 className="admin-login-heading">Sign In to Dashboard</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="admin-regs-label-box">
              <label htmlFor="name" className="admin-regs-label-login">
                Email :
              </label>
            </div>
            <div className="admin-login-inputbox">
              <input
                type="text"
                name="username"
                required={true}
                ref={email}
              />
            </div>
            <div className="admin-login-inputbox">
              <div className="admin-regs-label-box">
                <label htmlFor="name" className="admin-regs-label-login">
                  Password :
                </label>
              </div>
              <input
                type="password"
                name="password"
                required={true}
                ref={password}
              />
            </div>

            <div className="admin-login-btn-box">
              <button className="admin-login-btn" type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
                {/* Sign In */}
              </button>
            </div>

            <div>{errorMessage ? "User not found!" : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
