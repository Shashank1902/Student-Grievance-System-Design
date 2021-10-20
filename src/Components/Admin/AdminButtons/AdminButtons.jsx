import React from "react";
import "./AdminButtons.css";
import {Link} from "react-router-dom";


function AdminButtons() {

    return(
         <>
            <div className="admin-button-container">
              <div className="admin-button1">
                  <span className="btn-content">Search by type</span>
                  <img className="admin-btn-icon" 
                  src="assets/Button-dropdown.png"
                  alt=""></img>
              </div>

              <div className="admin-button1">
                  <span className="btn-content">Search by category</span>
                  <img  className="admin-btn-icon" 
                   src="assets/Button-dropdown.png"
                   alt=""></img> 
              </div>
              
              <div className="admin-button1">
                  <span className="btn-content">Search by ID</span>
                  <img  className="admin-btn-icon" 
                   src="assets/Button-searchbutton.png"
                   alt=""></img> 
              </div>

              <div className="admin-button1">
                  <span className="btn-content">Search by keyword</span>
                  <img  className="admin-btn-icon" 
                        src="assets/Button-searchbutton.png"
                        alt=""></img> 
              </div>
            </div>
         
         
         </>
        );
};

export default AdminButtons;