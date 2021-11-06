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
          </div>
          <div className="stdGrievanceOverlayBottom">
            <div className="stdGrievanceOverlayReportDate">
              <span>Repored on : 20 min ago</span>
            </div>
            <div className="stdGrievanceOverlayReportStatus">
              <span>Status: Pending</span>
            </div>
            <div>
              <span className="stdGrievanceOverlayHeading">
                Reply Something:
              </span>
            </div>

            <div className="stdGrievanceOverlayReplyContainer">
              <div className="stdGrievanceOverlayReplyWapper">
                <div className="stdGrievanceOverlayReplyBox">
                  <span className="stdGrievanceOverlayReplyHeading">
                    Admin:
                  </span>
                  <input
                    placeholder="Reply"
                    className="stdGrievanceOverlayReplyInput"
                    type="text"
                  />

                  <span className="stdGrievanceOverlayReplyHeading">
                    Student Name:
                  </span>
                  <input
                    placeholder="Reply"
                    className="stdGrievanceOverlayReplyInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
