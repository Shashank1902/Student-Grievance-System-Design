import React, { Component } from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar';
import AdminInfoBoxes from '../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes';
import AdminButtons from '../../Components/Admin/AdminButtons/AdminButtons';
import Adminrightpanel from '../../Components/Admin/Adminrightpanel/Adminrightpanel';
import AdminGrievance from "../../Components/Admin/AdminMiddle/AdminGrievance";
import './adminPanel.css';


const AdminPanel = () => {
  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <div>
        <AdminInfoBoxes />
      </div>

      <div>
         <AdminButtons/>
      </div>
          
      <div>
        <Adminrightpanel/> 
      </div>


      <div className="adminpanel-mid-cont">
        <div className="adminpanel-sidebar-cont">
          <AdminSidebar />
        </div>
        <div className="adminpanel-grievance-cont">
          <AdminGrievance />
          <AdminGrievance />
          <AdminGrievance />
          <AdminGrievance />
        </div>
      </div>
    </>
  );
};


export default AdminPanel;
