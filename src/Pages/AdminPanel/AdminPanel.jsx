import React, { Component } from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import AdminInfoBoxes from "../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes";
import AdminGrievance from "../../Components/Admin/AdminMiddle/AdminGrievance";
import "./adminPanel.css";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="AdNav">
        <AdminNavbar />
      </div>
      <div>
        <AdminInfoBoxes />
      </div>
      <div>
        <AdminSidebar />
      </div>
      <div>
        <AdminGrievance />
        <AdminGrievance />
        <AdminGrievance />
        <AdminGrievance />
      </div>
    </>
  );
};

export default AdminPanel;
