import React, {useState} from "react";
import "./adminnavbar.css";
import AdminProfileOverlay from "../AdminProfileOverlay/AdminProfileOverlay";

const AdminNavbar = () => {

  const [show, setShow] = useState(false);

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
            <span>
              <img
                className="admin-icon"
                src="assets/ProfileIcon2.png"
                alt="User"
                onClick={() => setShow(!show)}
              />
            </span>
            <div>
              {show ? <AdminProfileOverlay/> : null}
            </div>
          </div>
          <div className="admin-topbar-icon">
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
