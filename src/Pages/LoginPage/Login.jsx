import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

import {
  loginUser,
  useAuthDispatch,
  useAuthState,
} from "../../context/ContextIndex";

const Login = () => {
  const email = useRef("null");
  const password = useRef("null");
  let history = useHistory();

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    try {
      let response = await loginUser(dispatch, {
        email: userEmail,
        password: userPassword,
      });
      if (!response) return;
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bigdiv">
      <div>
        <img className="loginimg" src=".\assets\images\loginIllus.png" />
      </div>
      <div className="leftside">
        <div className="embrace-div">
          <div className="title-login">
            <span className="angular-login">&lt;</span>
            <span>em</span>
            <span className="angular-login">&gt;</span>
            <span>brace</span>
          </div>
        </div>
      </div>
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
              <button
                className="login-btn"
                type="submit" /*disabled={isFetching}*/
              >
                {/* {isFetching ? "Loging in..." : "Log in"} */}
                Login
              </button>
            </div>

            <div>{errorMessage ? "User not found!" : null}</div>
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
