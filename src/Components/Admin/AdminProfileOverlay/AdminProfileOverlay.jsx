import React from "react";
import { useAuthState } from "../../../context/ContextIndex";

import "./adminprofileoverlay.css";

function AdminProfileOverlay() {
  const admin = useAuthState();
  return (
    <>
      <div className="admin-overlay-container">
        <div className="admin-profile-container-box">
          <div className="admin-profile-image-cont">
            <img
              className="admin-profile-img"
              src="/assets/admin-profile-image.png"
              alt=""
            />
          </div>
          <div className="admin-text-container">
            <p className="admin-desc-textcontainer-items">Name: {admin.adminDetails.admin_name}</p>
            <p className="admin-desc-textcontainer-items">Designation: {admin.adminDetails.designation}</p>
            <p className="admin-desc-textcontainer-items">E-Mail: {admin.adminDetails.email}</p>
            <p className="admin-desc-textcontainer-items">Mobile Number: {admin.adminDetails.mob_no}</p>
          </div>
        </div>
        <div className="new-admin-profile-container-box">
          <p className="new-admin-title">Added Admins</p>
          <div className="new-admin-row1">
            <div className="new-admin-profile-container">
              <div className="new-admin-image-container">
                <img
                  className="new-admin-profile-img"
                  src="/assets/newadmin3.png"
                  alt=""
                />
              </div>
              <div className="new-admin-text-container">
                <p>Name :</p>
                <p>Designation :</p>
              </div>
            </div>
            <div className="new-admin-profile-container">
              <div className="new-admin-image-container">
                <img
                  className="new-admin-profile-img"
                  src="/assets/newadmin3.png"
                  alt=""
                />
              </div>
              <div className="new-admin-text-container">
                <p>Name :</p>
                <p>Designation :</p>
              </div>
            </div>
          </div>
          <div className="new-admin-row2">
            <div className="new-admin-profile-container">
              <div className="new-admin-image-container">
                <img
                  className="new-admin-profile-img"
                  src="/assets/newadmin3.png"
                  alt=""
                />
              </div>
              <div className="new-admin-text-container">
                <p>Name :</p>
                <p>Designation :</p>
              </div>
            </div>
            <div className="new-admin-profile-container">
              <div className="new-admin-image-container">
                <img
                  className="new-admin-profile-img"
                  src="/assets/newadmin3.png"
                  alt=""
                />
              </div>
              <div className="new-admin-text-container">
                <p>Name :</p>
                <p>Designation :</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfileOverlay;
