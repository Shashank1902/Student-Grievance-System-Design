import React, { Component } from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';
import './adminPanel.css';


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
            </>
            



        );
    }
} 

export default AdminPanel;