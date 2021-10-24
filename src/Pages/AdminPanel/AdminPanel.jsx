import React, { useEffect,useState,  useRef } from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import AdminInfoBoxes from "../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes";
import AdminButtons from "../../Components/Admin/AdminButtons/AdminButtons";
import Adminrightpanel from "../../Components/Admin/Adminrightpanel/Adminrightpanel";
import AdminGrievance from "../../Components/Admin/AdminMiddle/AdminGrievance";
import "./adminPanel.css";


const AdminPanel = () => {
  const adminInfoCont = useRef("null");
  const adminInfoBtn = useRef("null");
  const adminInfoBtnImg = useRef("null");

  

  useEffect(() => {
    let flag = 0;

    adminInfoBtn.current.onclick = () => {
      if (flag === 0) {
        adminInfoCont.current.style.top = "0px";
        adminInfoBtnImg.current.classList.add("adminInfo-btn-img-rotated");
        flag = 1;
      } else if (flag === 1) {
        adminInfoCont.current.style.top = "-415px";
        adminInfoBtnImg.current.classList.remove("adminInfo-btn-img-rotated");
        flag = 0;
      }
    };
  });

  return (
    <>
      <div className="admin_topnavbar">
        <AdminNavbar />
      </div>
      <div ref={adminInfoCont} className="adminInfo-container">
        <AdminInfoBoxes />
        <div ref={adminInfoBtn} className="adminInfo-btn">
          <div ref={adminInfoBtnImg} className="adminInfo-btn-img">
            <i className="fas fa-sort-down"></i>{" "}
          </div>
        </div>
      </div>

      <div className="adminpanel-mid-cont">
        <div className="adminpanel-sidebar-cont">
          <AdminSidebar />
        </div>
        <div className="adminpanel-grievance-wrapper">
          <AdminButtons />
          <div>
            <Adminrightpanel />
          </div>
          <div className="adminpanel-grievance-cont">
           
            <AdminGrievance />
            <AdminGrievance />
            <AdminGrievance />
            <AdminGrievance />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
