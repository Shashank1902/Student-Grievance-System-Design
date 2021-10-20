<<<<<<< HEAD
import React, { Component } from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar';
import AdminInfoBoxes from '../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes';
import AdminButtons from '../../Components/Admin/AdminButtons/AdminButtons';
import Adminrightpanel from '../../Components/Admin/Adminrightpanel/Adminrightpanel';
import './adminPanel.css';
import { Link } from 'react-router-dom';
=======
import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import AdminInfoBoxes from "../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes";
import AdminGrievance from "../../Components/Admin/AdminMiddle/AdminGrievance";
import "./adminPanel.css";
>>>>>>> 6615d10d507070f9d8fd0794d0ce57fa096e3563

const AdminPanel = () => {
  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <div>
        <AdminInfoBoxes />
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

<<<<<<< HEAD
class AdminPanel extends React.Component {
    render() {
        return (
            <>
            <div className="AdNav">
                <AdminNavbar/>
            </div>

            <div>
                <AdminSidebar/>
            </div>
            
            <div>
                <AdminInfoBoxes/>
            </div>
            
            <div>
               <AdminButtons/>
            </div>
          
            <div>
               <Adminrightpanel/> 
            </div>
           
           </>

        );
    }
} 

export default AdminPanel;
=======
export default AdminPanel;
>>>>>>> 6615d10d507070f9d8fd0794d0ce57fa096e3563
