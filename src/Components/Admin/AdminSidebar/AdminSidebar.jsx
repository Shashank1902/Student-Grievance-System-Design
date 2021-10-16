import React from "react";
// import { Link } from "react-router-dom";
import "./adminsidebar.css";

const AdminSidebar = () => {
  return (
    <>
      <div class="sidebar">
        <h2>
          <img src="assets/AdminPanel.png" alt=""></img>Admin Panel
        </h2>
        <ul class="nav">
          <li>
            <a href="/">
              <img src="assets/Home.png" alt=""></img>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/Profile">
              <img src="assets/Edit Profile.png" alt=""></img>
              <span>Edit Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/Specific Category.png" alt=""></img>
              <span>Specific Category</span>
            </a>
          </li>
          <li>
            <a href="/FeeRelatedIssues">
              <span>Fee Related</span>
            </a>
          </li>
          <li>
            <a href="/TransportationIssues">
              <span>Transportation</span>
            </a>
          </li>
          <li>
            <a href="/AntiRagging">
              <span>Anti Ragging</span>
            </a>
          </li>

          <li>
            <a href="/LostandFound">
              <span>Lost and Found</span>
            </a>
          </li>

          <li>
            <a href="/MentalHealth">
              <span>Mental Health</span>
            </a>
          </li>

          <li>
            <a href="/LibandLabIssues">
              <span>Library and Lab Issues</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
