import { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import AdminGrievanceOverlay from "../AdminGrievanceOverlay/AdminGrievanceOverlay";
import "./admingrievance.css";

import axios from "axios";
import { useAuthState } from "../../../context/ContextIndex";

function AdminGrievance({ grievance }) {
  // const showMoreBtn = useRef("null");
  const showLessBtn = useRef("null");
  const adminOverlayContainer = useRef("null");
  const grievanceMainConatiner = useRef("null");
  const overlay = useRef("null");

  const [user, setUser] = useState({});
  const admin = useAuthState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${grievance.user_id}`, {
        headers: { "admin-auth-token": admin.adminToken },
      })
      .then((result) => {
        // console.log(result);
        setUser(result.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    grievanceMainConatiner.current.addEventListener("click", () => {
      adminOverlayContainer.current.classList.remove("hidden");
      showLessBtn.current.classList.remove("hidden");
      grievanceMainConatiner.current.classList.add("blur-effect");
      document
        .querySelector(".admin-button-container ")
        .classList.add("blur-effect");
      document
        .querySelector(".rightpanel-container")
        .classList.add("blur-effect");
    });
    showLessBtn.current.addEventListener("click", () => {
      adminOverlayContainer.current.classList.add("hidden");
      document
        .querySelector(".admin-button-container ")
        .classList.remove("blur-effect");
      showLessBtn.current.classList.add("hidden");
      grievanceMainConatiner.current.classList.remove("blur-effect");
      document
        .querySelector(".admin-button-container ")
        .classList.remove("blur-effect");
      document
        .querySelector(".rightpanel-container")
        .classList.remove("blur-effect");
    });
  }, []);



  return (
    <>
      <div className="overlay hidden" ref={overlay}></div>
      <div className="grievance-container " ref={grievanceMainConatiner}>
        <div className="grievance-wrapper">
          <div className="grievance-top">
            <div className="grievance-id">
              <span>Grievance ID: {grievance.gri_id}</span>
            </div>
            <div className="grievanve-logo">
              <i className="fas fa-bookmark"></i>
              <img
                className="admin-grievance-logo"
                src="/assets/admin-grievance-search.png"
                alt=""
              />
            </div>
          </div>

          <div className="grievance-middle">
            <div className="grievance-name">
              <span>Name: {grievance.reported_by}</span>
            </div>
            <div className="grievance-desc">
              <span>{grievance.gri_text}</span>
            </div>
          </div>

          <div className="grievance-bottom">
            <div className="grievance-report-date">
              <span>Reported on: {format(grievance.created_on)}</span>
            </div>
            {/* <div className="read">
              <button ref={showMoreBtn} className="read-btn" type="button">
                Read More
              </button>
            </div> */}
            <div className="grievance-overlay-status">
              <span>Status : {grievance.is_solved ? "Solved" : "Pending"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* overlay------------ */}

      <img
        className="admin-overlay-cross hidden"
        src="/assets/admin-overlay-cross.png"
        alt=""
        ref={showLessBtn}
      />
      <div className="hidden" ref={adminOverlayContainer}>
        <AdminGrievanceOverlay grievance={grievance} user={user}/>
      </div>
    </>
  );
}

export default AdminGrievance;
