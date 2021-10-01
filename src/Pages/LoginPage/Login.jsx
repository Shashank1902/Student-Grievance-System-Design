import React, { useRef } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {

    const email = useRef("null");
    const password = useRef("null");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email.current.value, password.current.value);
        const userEmail = email.current.value;
        const userPassword = password.current.value;
        axios.post("http://localhost:8000/login", {email: userEmail, password: userPassword})
        .then(response => {
            console.log(response);
        });
    }

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-heading-box">
            <h2 className="login-heading">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input
                type="text"
                name="username"
                required=""
                placeholder="Username"
                ref={email}
              />
            </div>
            <div className="inputbox">
              <input
                type="password"
                name="password"
                required=""
                placeholder="Password"
                ref={password}
              />
            </div>

            <div className="login-btn-box">
              <button className="login-btn" type="submit">
                Submit
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
