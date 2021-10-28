import React from "react";
import "./editadmin.css";

function EditAdmin() {
  return (
    <>
      <div className="edit-admin-outer">
        <div className="edit-admin-inner">
          <div className="edit-admin-profile">
            <img className="edit-admin-img" src="assets/user.png" alt="" />
          </div>

          <form className="">
            <div className="edit-admin-title">
              <span>Edit Admin Profile</span>
            </div>
            <div className="edit-admin-form">
              <div className="edit-admin-container">
                <div className="">
                  <label className="edit-admin-label">Name</label>
                </div>
                <div className="">
                  <input className="edit-admin-input" type="text" />
                </div>
              </div>

              <div className="edit-admin-container">
                <div className="">
                  <label className="edit-admin-label">Designation </label>
                </div>
                <div className="">
                  <input className="edit-admin-input" type="" placeholder="" />
                </div>
              </div>

              <div className="edit-admin-container">
                <div className="">
                  <label className="edit-admin-label">Mobile No</label>
                </div>
                <div className="">
                  <input className="edit-admin-input" type="" placeholder="" />
                </div>
              </div>
              <div className="edit-admin-container">
                <div>
                  <label className="edit-admin-label"> Email </label>
                </div>
                <div>
                  <input type="text" className="edit-admin-input"/>
                </div>
              </div>
              <div className="edit-admin-container">
                <div>
                  <label className="edit-admin-label"> Password</label>
                </div>
                <div>
                  <input type="password" className="edit-admin-input"/>
                </div>
              </div>

              <div className="edit-admin-btn">
                <button className="edit-admin-submit" id="admin-submit" type="Adminsubmit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default EditAdmin;
