import React, { useState, useRef, useEffect } from "react";
import AddAdmin from "../AddAdmin/AddAdmin";
import EditAdmin from "../AdminEditProfile/EditAdmin";
import "./adminsidebar.css";
import { useAuthState } from "../../../context/ContextIndex";

const AdminSidebar = () => {
  const admin = useAuthState();
  const [update, setUpdate] = useState(false);
  const addadmincontainer = useRef("null");
  const addadmincrossbutton = useRef("null");
  const addadminbutton = useRef("null");
  const overlay = useRef("null");

  useEffect(() => {
    addadminbutton.current.addEventListener("click", () => {
      addadmincontainer.current.classList.remove("hidden");
      addadmincrossbutton.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
    });
    addadmincrossbutton.current.addEventListener("click", () => {
      addadmincontainer.current.classList.add("hidden");
      addadmincrossbutton.current.classList.add("hidden");
      overlay.current.classList.add("hidden");
    });
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-name-details">
          <div className="sidebar-profile-pic-cont">
            <img
              className="sidebar-profile-pic"
              src="/assets/ProfileIcon2.png"
              alt="User"
            />
          </div>
          <div className="sidebar-name-cont">
            <div className="sidebar-name">
              {admin.adminDetails.admin_name.split(" ")[0]}
            </div>
            <div className="sidebar-desi">{admin.adminDetails.designation}</div>
          </div>
        </div>

        <div className="dashboard-txt">
          Dashboard
          <hr />
        </div>

        <div className="sidebar-options-cont">
          <div className="sidebar-option">
            <div className="sidebar-option-name">Home</div>
            <div>
              <img
                className="sidebar-option-icon"
                src="/assets/Home.png"
                alt=""
              />
            </div>
          </div>
          <div className="sidebar-option" onClick={() => setUpdate(!update)}>
            <div className="sidebar-option-name">Edit Profile</div>
            <div>
              <img
                className="sidebar-option-icon"
                src="/assets/Edit Profile.png"
                alt=""
              />
            </div>
          </div>
          <div className="edit-call">{update ? <EditAdmin /> : null}</div>

          <div className="sidebar-option" ref={addadminbutton}>
            <div className="sidebar-option-name">Add Admin</div>
            <div className="addadmin-option-icon">
              <i className="fas fa-user-plus"></i>
            </div>
          </div>
          <div className="overlay hidden" ref={overlay}></div>
          <div className="hidden" ref={addadmincontainer}>
            <AddAdmin></AddAdmin>
          </div>
          <img
            ref={addadmincrossbutton}
            className="addadmincrossbutton hidden"
            src="/assets/admin-overlay-cross.png"
            alt=""
          />

          <div className="sidebar-option-btn-cont">
            <div className="sidebar-option-btn">Specific Categories</div>
            <div className="sidebar-option-btn-icon">
              <i className="fas fa-sort-down"></i>
            </div>
          </div>

          <div className="specific-categories-box">
            <div className="specific-cat-cont">Fee Related</div>
            <div className="specific-cat-cont">Mental Health</div>
            <div className="specific-cat-cont">Transportation</div>
            <div className="specific-cat-cont">Anti Ragging</div>
            <div className="specific-cat-cont">Lost and Found</div>
            <div className="specific-cat-cont">Library and Lab</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
