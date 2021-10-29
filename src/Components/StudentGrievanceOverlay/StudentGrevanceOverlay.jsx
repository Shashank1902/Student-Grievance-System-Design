import "./studentgrievanveoverlay.css";

export default function StudentGrevanceOverlay() {
  return (
    <>
      <div className="studentGrievanceOverlay">
        <div className="stdGrievanceWrapper">
          <div className="stdGrievanceOverlayTop">
            <div className="stdOverlayGrievanceId">
              <span>Grievance ID:12346</span>
            </div>
            <div className="stdGrievanceOverlayIcon">
              <i className="stdOverlayBookmark fas fa-bookmark"></i>
            </div>
          </div>
          <div className="stdGrievanceOverlayMiddle">
            <div className="stdGrievanceOverlayHeading">
              <span>Name : sanket Raikwar</span>
            </div>

            <div className="stdGrievanceOverlayInfoBox">
              <div className="stdGrievanceOverlayInfoLeft">
                <span>Institute Id :23263898273</span>
                <span>Contect No :23263898273</span>
              </div>
              <div className="stdGrievanceOverlayInfoRight">
                <span>Email :abc@gmail.com</span>
                <span>Branch : CSE</span>
              </div>
            </div>

            <div className="stdGrievanceOverlayDesc">
              <span className="stdGrievanceOverlayHeading">
                Grievance Reported:
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, temporibus architecto ab nihil soluta ea tempora,
                aspernatur distinctio quam, aliquam obcaecati labore. Soluta
                impedit molestias doloremque atque veritatis deserunt. Quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="stdGrievanceOverlayDesc">
              <span className="stdGrievanceOverlayHeading">Suggestions:</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, temporibus architecto ab nihil soluta ea tempora,
                aspernatur distinctio quam, aliquam obcaecati labore. Soluta
                impedit molestias doloremque atque veritatis deserunt. Quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div className="stdOverlaybottom">
            <div className="stdOverlayreportDate">
              <span>Reported on:10 oct 21</span>
            </div>
            <div className="stdOverlayreportStatus">
              <span>Status : Pending</span>
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
                    <span className="std-overlay-rply-box-heading">
                      Admin:
                    </span>
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
