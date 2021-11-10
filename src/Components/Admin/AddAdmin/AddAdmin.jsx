import React, { useRef, useState } from "react";
import axios from "axios";
import { useAuthState } from "../../../context/ContextIndex";
import "./addadmin.css";

function AddAdmin() {
  const admin = useAuthState();

  const [response, setResponse] = useState("");

  const adminName = useRef("null");
  const adminDesignation = useRef("null");
  const adminMobNo = useRef("null");
  const adminEmail = useRef("null");
  const adminPassword = useRef("null");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      adminName.current.value,
      adminDesignation.current.value,
      adminMobNo.current.value,
      adminEmail.current.value,
      adminPassword.current.value
    );

    axios
      .post(
        "https://sgsapi.herokuapp.com/adminRegister",
        {
          adminname: adminName.current.value,
          designation: adminDesignation.current.value,
          mobNo: adminMobNo.current.value,
          email: adminEmail.current.value,
          password: adminPassword.current.value,
        },
        {
          headers: {
            "admin-auth-token": admin.adminToken,
          },
        }
      )
      .then((res) => {
        setResponse("Admin added successfully!");
      })
      .catch((err) => {
        setResponse("Something wrong happend! Please try again.");
      });
  };

  return (
    <>
      <div>
        <div className="add-admin-form-outer-div">
          <div className="add-admin-form-wrapper">
            <form className="add-admin-form" onSubmit={handleSubmit}>
              <div className="title-of-add-admin-form">
                <span>Add Admin</span>
              </div>
              <hr className="stdProfileHr" />
              <div className="addAdminInputContainer">
                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">
                      Admin Name
                    </label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Name"
                      ref={adminName}
                      required={true}
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">
                      Designation
                    </label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Designation"
                      ref={adminDesignation}
                      required={true}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">
                      Mobile Number
                    </label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="number"
                      placeholder="Mobile Number"
                      ref={adminMobNo}
                      required={true}
                      maxLength={10}
                    />
                  </div>
                </div>
                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">
                      Email Id
                    </label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="email"
                      placeholder="Email Id"
                      ref={adminEmail}
                      required={true}
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">
                      Password
                    </label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="password"
                      placeholder="Password"
                      ref={adminPassword}
                      required={true}
                      minLength={6}
                    />
                  </div>
                </div>
              </div>

              <p className="addAdminResMsg">{response}</p>
              <div className="addAdminButtonContainer">
                <button className="addAdminButtonForSubmit" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAdmin;
