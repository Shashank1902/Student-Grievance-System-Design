import React, { Component } from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar';
import AdminInfoBoxes from '../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes';
import './adminPanel.css';
import { Link } from 'react-router-dom';


class AdminPanel extends React.Component {
    render() {
        return (
            <>
            <div className="AdNav">
                <AdminNavbar></AdminNavbar>
            </div>

            <div>
                <AdminSidebar></AdminSidebar>
            </div>
            
            <div>
                <AdminInfoBoxes></AdminInfoBoxes>
            </div>
            
            </>
            



        );
    }
} 

export default AdminPanel;