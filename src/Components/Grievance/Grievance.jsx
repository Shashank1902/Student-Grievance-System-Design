import { format } from "timeago.js";

import "./grievance.css";

function Grievance({ grievance }) {

  return (
    <>
      <div className="grievance-box">
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
              <small>Status: {grievance.is_solved ? "Solved" : "Pending"}</small>
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
