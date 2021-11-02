import "./admingrievanceoverlay.css";

export default function AdminGrievanceOverlay() {
  return (
    <>
      <div className="adminGrievanceOverlay">
        <div className="adminGrievanceOverlayWrapper">
          <div className="grievance-overlay-top">
            <div className="grievance-overlay-id">
              <span>Grievance ID:12345</span>
            </div>
            <div className="grievanve-overlay-logo">
              <i className="admin-grievance-overlay-bookmark fas fa-bookmark"></i>
              <img
                className="admin-grievance-overlay-search"
                src="assets/admin-grievance-search.png"
                alt=""
              />
            </div>
          </div>

          <div className="grievance-overlay-middle">
            <div className="grievance-overlay-name">
              <span>Name : Sanket Raikwar</span>
            </div>
            <div className="grievance-overlay-info-box">
              <div className="grievance-overlay-info-left">
                <span>Institute Id :23263898273</span>
                <span>Contact No :23263898273</span>
              </div>
              <div className="grievance-overlay-info-right">
                <span>Email :abc@gmail.com</span>
                <span>Branch : CSE</span>
              </div>
            </div>
            <div className="grievance-overlay-desc-box">
              <span className="grievance-overlay-desc-heading">
                Grievance Reported:
              </span>
              <span>
                I am a student of CSE branch Gyan Ganga Institute, i have lost my fees receipt for the third sem, how to get a receipt copy of that.
              </span>
            </div>
            <div className="grievance-overlay-desc-box">
              <span className="grievance-overlay-desc-heading">
                Suggestions:
              </span>
              <span>
                Go to office at the fees counter and request a copy of the receipt from the on duty accountant, a copy of the receipt will be provided on spot.
              </span>
            </div>
          </div>

          <div className="grievance-overlay-bottom">
            <div className="grievance-overlay-report-date">
              <span>Reported on:10 oct 21</span>
            </div>
            <div className="grievance-overlay-status">
              <span>Status : Pending</span>
            </div>
          </div>
          <div className="grievance-overlay-bottom-rply-container">
            <div className="grievance-overlay-mark-box">
              <label class="grievance-overlay-mark-container">
                Mark Solved:
                <input type="checkbox" />
                <span class="grievance-overlay-checkmark"></span>
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
                    <div className="adminmessage-container"></div>

                    <span className="grievance-overlay-rply-box-heading">
                      Student Name:
                    </span>

                    <div className="admin-input-container">
                      <input
                        id="inputMsgForm"
                        className="admin-message-input"
                        type="text"
                        placeholder="Type your message here"
                      />

                      <button className="admin-submit-button" type="submit">
                        <i className="fas fa-angle-double-right"></i>
                      </button>
                    </div>
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
