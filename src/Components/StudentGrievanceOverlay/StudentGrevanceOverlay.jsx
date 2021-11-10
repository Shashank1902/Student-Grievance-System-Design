import "./studentgrievanveoverlay.css";
import { format } from "timeago.js";
// import { useAuthState } from "../../context/ContextIndex";

export default function StudentGrevanceOverlay({ grievance }) {
  // const user = useAuthState();

  return (
    <>
      <div className="studentGrievanceOverlay">
        <div className="stdGrievanceWrapper">
          <div className="stdGrievanceOverlayTop">
            <div className="stdOverlayGrievanceId">
              <span>Grievance ID: {grievance.gri_id}</span>
            </div>
            <div className="stdGrievanceOverlayIcon">
              <i className="stdOverlayBookmark fas fa-bookmark"></i>
            </div>
          </div>
          <div className="stdGrievanceOverlayMiddle">
            <div className="stdGrievanceOverlayHeading">
              <span>Name : {grievance.reported_by}</span>
            </div>

            {/* <div className="stdGrievanceOverlayInfoBox">
              <div className="stdGrievanceOverlayInfoLeft">
                <span>Institute Id: {user.userDetails.institution_id}</span>
                <span>Contact No: {user.userDetails.mob_no}</span>
              </div>
              <div className="stdGrievanceOverlayInfoRight">
                <span>Email: {user.userDetails.email}</span>
                <span>Branch: {user.userDetails.branch}</span>
              </div>
            </div> */}

            <div className="stdGrievanceOverlayDesc">
              <span className="stdGrievanceOverlayHeading">
                Grievance Reported:
              </span>
              <p>{grievance.gri_text}</p>
            </div>
            <div className="stdGrievanceOverlayDesc">
              <span className="stdGrievanceOverlayHeading">Suggestions:</span>
              <p>
                {grievance.gri_suggestion
                  ? grievance.gri_suggestion
                  : "(No suggestion given!)"}
              </p>
            </div>
          </div>
          <div className="stdOverlaybottom">
            <div className="stdOverlayreportDate">
              <span>Reported on: {format(grievance.created_on)}</span>
            </div>
            <div className="stdOverlayreportStatus">
              <small>
                Status: {grievance.is_solved ? "Solved" : "Pending"}
              </small>
              <div className="status-icon">
                <i className="fas fa-circle"></i>
              </div>
            </div>
          </div>
          <div className="std-overlay-reply-container">
            <div className="std-overlay-reply-heading-box">
              <span className="std-overlay-reply-heading">
                Reply Something:
              </span>
            </div>

            <div className="std-overlay-reply-input-container">
              <div className="std-overlay-reply-wrapper">
                <div className="std-overlay-rply-box">
                  <span className="std-overlay-rply-box-heading">Admin:</span>
                  <div className="stdmessage-container"></div>

                  <span className="std-overlay-rply-box-heading">
                    Student Name:
                  </span>

                  <div className="std-input-container">
                    <input
                      id="inputMsgForm"
                      className="std-message-input"
                      type="text"
                      placeholder="Type your message here"
                    />

                    <button className="std-submit-button" type="submit">
                      <i className="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
