import React from "react";
import "./Adminrightpanel.css";


function Adminrightpanel() {
    
   return (
        <>
            <div className="rightpanel-container">
              <div className="right-buttons">
              <img 
              className="admin-rightimages"
              src="assets/bookmark.png"
              alt=""></img>
              <div className="admin-text"><span className="right-content">View Bookmark</span></div>
             
          </div>
              <div className="right-buttons">
              <img 
              className="admin-rightimages"
              src="assets/bookhalf.png"
              alt=""></img>
             <div className="admin-text"> <span className="right-content">View Solved</span></div>
             
          </div>
          <div className="right-buttons">
          <img 
              className="admin-rightimages"
              src="assets/review.png"
              alt=""></img>
             <div className="admin-text"><span className="right-content">Review</span></div>
              
          </div>
         </div> 

        </>


    );
};   

export default Adminrightpanel;
