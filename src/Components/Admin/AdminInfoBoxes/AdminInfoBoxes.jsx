import React from "react";
import "./AdminInfoBoxes.css";

function AdminInfoBoxes() {
  return (
    <>
      <div className="AdminInfoBar">
        <div className="pinkbox InfoBox">
          <div className="boxcontent">
            <span>Grievances reported till date</span>
          </div>
          <div className="number">15</div>
          <img className="pink-bg" src="assets/pattern.png" alt=""></img>
        </div>

        <div className="greenbox InfoBox">
          <div className="boxcontent">Pending grievances</div>
          <div className="number">5</div>
          <img className="green-bg" src="assets/green circles.png" alt=""></img>
        </div>

        <div className="bluebox  InfoBox">
          <div className="boxcontent">Grievances solved</div>
          <div className="number">45</div>
          <img className="blue-bg" src="assets/blue.png" alt=""></img>
        </div>

        <div className="yellowbox  InfoBox">
          <div className="boxcontent">Grievances today</div>
          <div className="number">150</div>
          <img className="yellow-bg" src="assets/flowers.png" alt=""></img>
        </div>
      </div>
    </>
  );
}

export default AdminInfoBoxes;
