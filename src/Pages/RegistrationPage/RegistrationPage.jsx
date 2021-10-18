import React, { useRef } from "react";
import "./registrationPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

const RegistrationPage = () => {
  const username = useRef("null");
  const instituteId = useRef("null");
  const branch = useRef("null");
  const sem = useRef("null");
  const mobNo = useRef("null");
  const email = useRef("null");
  const password = useRef("null");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = username.current.value;
    const institute_Id = instituteId.current.value;
    const user_branch = branch.current.value;
    const user_sem = sem.current.value;
    const mob_No = mobNo.current.value;
    const user_email = email.current.value;
    const user_password = password.current.value;

    const user = {
      username: userName,
      instituteId: institute_Id,
      branch: user_branch,
      semester: user_sem,
      mobNo: mob_No,
      email: user_email,
      password: user_password,
    };

    try {
      axios
        .post("https://sgsapi.herokuapp.com/register", user)
        .then((response) => {
          console.log(response);
        });
      history.push("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bigdiv">
      <div className="leftside">
        <div className="embrace-div">
          <div className="title-login">
            <span className="angular-login">&lt;</span>
            <span>em</span>
            <span className="angular-login">&gt;</span>
            <span>brace</span>
          </div>

          <div className="loginImg-container">
            <img className="loginimg" src="assets\images\loginIllus.png" alt=""/>
          </div>
        </div>
      </div>

      <div className="regs-box-cont">
        <div className="regs-box">
          <form onSubmit={handleSubmit}>
            <div className="login-heading-box">
              <h2 className="login-heading">Sign Up</h2>
            </div>

            <div className="regs-label-box">
              <label htmlFor="name" className="regs-label">
                Name :
              </label>
            </div>

            <div className="regs-input-box">
              <input
                className="regs-input"
                type="text"
                name="name"
                required=""
                // placeholder="Name"
                ref={username}
              />
            </div>

            <div className="regs-label-box">
              <label htmlFor="institute-id" className="regs-label">
                Institute ID :
              </label>
            </div>

            <div className="regs-input-box">
              <input
                className="regs-input"
                type="text"
                name="name"
                required=""
                // placeholder="Institute ID"
                ref={instituteId}
              />
            </div>

            <div className="regs-label-box">
              <label htmlFor="name" className="regs-label">
                Email :
              </label>
            </div>
            <div className="regs-input-box">
              <input
                className="regs-input"
                type="text"
                name="email"
                required=""
                // placeholder="Email"
                ref={email}
              />
            </div>

            <div className="regs-label-box">
              <label htmlFor="name" className="regs-label">
                Password :
              </label>
            </div>
            <div className="regs-input-box">
              <input
                className="regs-input"
                type="password"
                name="password"
                required=""
                // placeholder="Password"
                ref={password}
              />
            </div>

            <div className="regs-btn-box">
              <button type="submit" className="regs-btn">
                Submit
              </button>

              <Link style={{ textDecoration: "none", color: "black" }} to="/Login">
                <div className="signin-btn-box">
                  <div className="regs-span-signup">
                    <div>or</div>
                    <div className="regs-signup-btn">Sign In</div>
                    <div className="sign_in_icon">
                      <i className="fas fa-sign-in-alt"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
