import React, { Component } from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar';
import './adminPanel.css';
import { Link } from 'react-router-dom';
import AdminGrievance from '../../Components/Admin/AdminMiddle/AdminGrievance';

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
                <AdminGrievance />
                <AdminGrievance />
                <AdminGrievance />
                <AdminGrievance />

            </div>
            </>
            



        );
    }
} 

export default AdminPanel;