import React, { Component } from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar';
import AdminInfoBoxes from '../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes';
import AdminButtons from '../../Components/Admin/AdminButtons/AdminButtons';
import Adminrightpanel from '../../Components/Admin/Adminrightpanel/Adminrightpanel';
import './adminPanel.css';
import { Link } from 'react-router-dom';


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