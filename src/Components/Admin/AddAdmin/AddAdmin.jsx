import React from "react";
import "./addadmin.css";

function AddAdmin() {
  return (
    <>
      <div>
        <div className="add-admin-form-outer-div">
          <div className="add-admin-form-wrapper">
            <div className="add-admin-form-img-bigdiv">
              <img className="add-admin-form-img" src="assets/user.png" alt="" />
            </div>
            <hr className="stdProfileHr" />

            <form className="add-admin-form">
              <div className="title-of-add-admin-form">
                <span>Register Admin</span>
              </div>
              <div className="addAdminInputContainer">



                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">Admin Name</label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">Designation</label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Designation of the Admin "
                    />
                  </div>
                </div>

                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">Mobile Number</label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">Email Id</label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Email Id"
                    />
                  </div>
                </div>

                <div className="addAdminInputBox">
                  <div className="addAdminHeading">
                    <label className="add-admin-name-label-for-input">Password</label>
                  </div>
                  <div className="add-Admin-Profile-Input-box">
                    <input
                      className="add-admin-input-for-form"
                      type="text"
                      placeholder="Secure Password"
                    />
                  </div>
                </div>

              </div>

              <div className="addAdminButtonContainer">
                <button className="addAdminButtonForSubmit" id="submit" type="submit">
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

