import React from "react";
import "./adminnavbar.css";
import { useHistory } from "react-router-dom";
import { logoutAdmin, useAuthDispatch } from "../../../context/ContextIndex";

const AdminNavbar = ({admin}) => {

  let history = useHistory();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logoutAdmin(dispatch);
    history.push("/admin/login");
  };
  

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
          <div className="admin-name">Welcome, {admin ? admin.admin_name : null}</div>
        </div>

        <div className="admin-topbar-icon-cont">
          <div className="admin-topbar-icon">
            <span>
              <img
                className="admin-icon"
                src="/assets/ProfileIcon2.png"
                alt="User"
              />
            </span>
          </div>
          <div className="admin-topbar-icon" onClick={handleLogout}>
            <span>
              <img
                className="admin-icon"
                src="/assets/LogoutIcon.png"
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
