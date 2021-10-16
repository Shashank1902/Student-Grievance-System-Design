import React from "react";
import { Link } from "react-router-dom";
import "./adminnavbar.css";

const AdminNavbar = () => {
  return (
    <>
      <div className="title-adminPage">
        <span className="angular-adminPage">&lt;</span>
        <span>em</span>
        <span className="angular-adminPage">&gt;</span>
        <span>brace</span>
      </div>

      <div className="admin-container">
        <div className="admin-container1">
          <span className="admin-title">Welcome Sharmila!</span>
        </div>

        <div className="admin-container2">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Profile"
          >
            <span className="admin-profile-text">Profile</span>

            <span>
              <img
                className="admin-icon"
                src="assets/ProfileIcon2.png"
                alt="User"
              />
            </span>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <span className="admin-profile-text">Log Out</span>

            <span>
              <img
                className="admin-icon"
                src="assets/LogoutIcon.png"
                alt="User"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
