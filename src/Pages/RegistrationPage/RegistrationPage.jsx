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

  const history = useHistory()

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
    }

    try {
      axios
        .post("http://localhost:8000/register", user)
        .then((response) => {
          console.log(response.data.rows[0]);
        });
      history.push("/Login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="big-box">
      <div >
        <img className="loginimg" src=".\assets\images\loginIllus.png" />
      </div>
      <div className="leftside">
        <div className="embrace-div">
          <div className="regs-title">
            <span className="regs-angular">&lt;</span>
            <span>em</span>
            <span className="regs-angular">&gt;</span>
            <span>brace</span>
          </div>
        </div>
        <div className="regs-box-cont">
          <div className="regs-box">
            <form onSubmit={handleSubmit}>
              <div className="regs-heading-box">
                <span>Sign Up</span>
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
                  Mobile No. :
                </label>
              </div>

              <div className="regs-input-box">
                <input
                  className="regs-input"
                  type="text"
                  name="mobileNo"
                  required=""
                  // placeholder="Mobile Number"
                  ref={mobNo}
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

              <div className="option-box">
                <select
                  className="branch-option"
                  name="branch"
                  id="branch"
                  defaultValue="-"
                  ref={branch}
                >
                  <option value="-" disabled>
                    Branch
                  </option>
                  <option value="cse">CSE</option>
                  <option value="it">IT</option>
                </select>

                <select
                  className="sem-option"
                  name="sem"
                  id="sem"
                  defaultValue="-"
                  ref={sem}
                >
                  <option value="-" disabled>
                    Semester
                  </option>
                  <option value="sem1">1</option>
                  <option value="sem2">2</option>
                </select>
              </div>

              <div className="regs-btn-box">
                <button type="submit" className="regs-btn">
                  Submit
                </button>
              </div>

              <Link style={{ textDecoration: "none" }} to="/Login">
                <div className="signin-btn-box">
                  <div>
                    <button className="regs-signup-btn" type="submit">
                      Login
                    </button>
                  </div>
                  <div>
                    <img
                      className="signin-logo"
                      src="/assets/Registration-Logo/signin-logo.png"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </form>
          </div>
          {/* <div className="">embrace</div> */}
        </div>
      </div>
     </div> );
};

      export default RegistrationPage;
