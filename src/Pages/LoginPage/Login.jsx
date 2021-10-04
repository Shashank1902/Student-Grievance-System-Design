import React, { useContext, useEffect, useRef, useState } from "react";
import "./login.css";
import { loginCall, loginCheck } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useRef("null");
  const password = useRef("null");

  const didMount = useRef(false);

  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    loginCall({ email: userEmail, password: userPassword }, dispatch);
  };

  useEffect(() => {
    if (didMount.current) {
      loginCheck(dispatch);
    } 
  }, []);

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-heading-box">
            <h2 className="login-heading">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-inputbox">
              <input
                type="text"
                name="username"
                required=""
                placeholder="Username"
                ref={email}
              />
            </div>
            <div className="login-inputbox">
              <input
                type="password"
                name="password"
                required=""
                placeholder="Password"
                ref={password}
              />
            </div>

            <div className="login-btn-box">
              <button className="login-btn" type="submit" disabled={isFetching}>
                {isFetching ? "Loging in..." : "Log in"}
              </button>
            </div>

            <div className="signup-btn-box">
              <span>
                Register Here{" "}
                <button className="signup-btn" type="submit">
                  Sign up
                </button>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
