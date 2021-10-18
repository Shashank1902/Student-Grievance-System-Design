import React from "react";
import "./adminnavbar.css";

const AdminNavbar = () => {
  return (
    <>
      <div className="admin-topbar">
        <div className="title-adminPage">
          <span className="angular-adminPage">&lt;</span>
          <span>em</span>
          <span className="angular-adminPage">&gt;</span>
          <span>brace</span>
        </div>

        <div className="admin-name-container">
          <div className="admin-name">Welcome, Sharmila Charles</div>
        </div>

        <div className="admin-topbar-icon-cont">
          <div className="admin-topbar-icon">
            {/* <span className="admin-profile-text">Profile</span> */}
            <span>
              <img
                className="admin-icon"
                src="assets/ProfileIcon2.png"
                alt="User"
              />
            </span>
          </div>
          <div className="admin-topbar-icon">
            {/* <span className="admin-profile-text">Log Out</span> */}
            <span>
              <img
                className="admin-icon"
                src="assets/LogoutIcon.png"
                alt="Logout"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
