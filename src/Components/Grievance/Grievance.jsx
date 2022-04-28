import { useEffect, useRef } from "react";
import { format } from "timeago.js";
import StudentGrevanceOverlay from "../StudentGrievanceOverlay/StudentGrevanceOverlay";

import "./grievance.css";

function Grievance({ grievance }) {
  const stdOverlayConatiner = useRef("null");
  const stdGrievanceOverlayClose = useRef("null");
  const stdGrievanceOverlayHandler = useRef("null");
  const overlay = useRef("null");

  useEffect(() => {
    stdGrievanceOverlayHandler.current.addEventListener("click", (event) => {
      stdOverlayConatiner.current.classList.remove("hidden");
      stdGrievanceOverlayClose.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
    });
    stdGrievanceOverlayClose.current.addEventListener("click", (event) => {
      
      stdOverlayConatiner.current.classList.add("hidden");
      stdGrievanceOverlayClose.current.classList.add("hidden");
      
      overlay.current.classList.add("hidden");
    });
    
  }, []);

  return (
    <>
      <div className="overlay hidden" ref={overlay}></div>
      <img
            ref={stdGrievanceOverlayClose}
            className="stdGrievanceOverlayCrossBtn hidden"
            src="assets/admin-overlay-cross.png"
            alt=""
          />
      <div className="grievance-box" ref={stdGrievanceOverlayHandler}>
        <div className="grievance_overlay_container">
          <div className="stdOverlayConatiner">
            <div className="hidden" ref={stdOverlayConatiner}>
              <StudentGrevanceOverlay grievance={grievance} />
            </div>
          </div>
          
        </div>
        <div className="content">
          <div className="grievance-top-cont">
            Grievance ID: {grievance.gri_id}
            <div className="bookmark">
              <i className="fas fa-bookmark"></i>
            </div>
          </div>
          <div className="grievance-middle-cont">
            <p>Name: {grievance.reported_by}</p>
          </div>
          <div className="matter">{grievance.gri_text}</div>
          <div className="grievance-foot">
            <div className="timestamp">
              <small>Reported on: {format(grievance.created_on)}</small>
            </div>

            <div className="status">
              <small>
                Status: {grievance.is_solved ? "Solved" : "Pending"}
              </small>
              <div className="status-icon">
                <i className="fas fa-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grievance;
