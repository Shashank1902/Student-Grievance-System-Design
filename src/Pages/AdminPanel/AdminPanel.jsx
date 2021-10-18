import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar";
import AdminInfoBoxes from "../../Components/Admin/AdminInfoBoxes/AdminInfoBoxes";
import AdminGrievance from "../../Components/Admin/AdminMiddle/AdminGrievance";
import "./adminPanel.css";

const AdminPanel = () => {
  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <div>
        {/* <AdminInfoBoxes /> */}
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
