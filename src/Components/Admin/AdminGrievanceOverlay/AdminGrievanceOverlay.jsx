import { format } from "timeago.js";
import "./admingrievanceoverlay.css";

export default function AdminGrievanceOverlay({ grievance, user }) {
  return (
    <>
      <div className="adminGrievanceOverlay">
        <div className="adminGrievanceOverlayWrapper">
          <div className="grievance-overlay-top">
            <div className="grievance-overlay-id">
              <span>Grievance ID: {grievance.gri_id}</span>
            </div>
            <div className="grievanve-overlay-logo">
              <i className="admin-grievance-overlay-bookmark fas fa-bookmark"></i>
              <img
                className="admin-grievance-overlay-search"
                src="/assets/admin-grievance-search.png"
                alt=""
              />
            </div>
          </div>

          <div className="grievance-overlay-middle">
            <div className="grievance-overlay-name">
              <span>Name: {grievance.reported_by}</span>
            </div>
            <div className="grievance-overlay-info-box">
              <div className="grievance-overlay-info-left">
                <span>Institute Id: {user.institution_id}</span>
                <span>Contact No: {user.mob_no}</span>
              </div>
              <div className="grievance-overlay-info-right">
                <span>Email: {user.email}</span>
                <span>Branch: {user.branch}</span>
              </div>
            </div>
            <div className="grievance-overlay-desc-box">
              <span className="grievance-overlay-desc-heading">
                Grievance Reported:
              </span>
              <span>{grievance.gri_text}</span>
            </div>
          </div>

          <div className="grievance-overlay-bottom">
            <div className="grievance-overlay-report-date">
              <span>Reported on: {format(grievance.created_on)}</span>
            </div>
            <div className="grievance-overlay-status">
              <span>Status : {grievance.is_solved ? "Solved" : "Pending"}</span>
            </div>
          </div>
          <div className="grievance-overlay-bottom-rply-container">
            <div className="grievance-overlay-mark-box">
              <label className="grievance-overlay-mark-container">
                Mark Solved:
                <input type="checkbox" />
                <span className="grievance-overlay-checkmark"></span>
              </label>
            </div>
            <div className="grievance-overlay-reply-container">
              <div className="grievance-overlay-reply-heading-box">
                <span className="grievance-overlay-reply-heading">
                  Reply Something:
                </span>
              </div>

              <div className="grievance-overlay-reply-input-container">
                <div className="grievance-overlay-reply-wrapper">
                  <div className="grievance-overlay-rply-box">
                    <span className="grievance-overlay-rply-box-heading">
                      Admin:
                    </span>
                    <input
                      placeholder="Reply"
                      className="grievance-overlay-rply-box-input"
                      type="text"
                    />

                    <span className="grievance-overlay-rply-box-heading">
                      Student Name:
                    </span>
                    <input
                      placeholder="Reply"
                      className="grievance-overlay-rply-box-input"
                      type="text"
                    />
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
