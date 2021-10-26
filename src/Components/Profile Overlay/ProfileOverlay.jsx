import "./profileoverlay.css";
import { useAuthState } from "../../context/ContextIndex";

function ProfileOverlay() {
  const user = useAuthState();

  return (
    <>
      <div className="profileoverlay-container-box">
        <div className="profileoverlay-image-cont">
          <img className="profileoverlay-img" src="assets/user.png" alt="" />
          {/* <button className="camera-btn">
            <i className="fas fa-camera"></i>
          </button> */}
        </div>

        <div className="overlay-text-container">
          <p className="overlay-title-text">
            {user.userDetails ? user.userDetails.username : "Unknown"}
          </p>

          <div className="overlay-desc-textcontainer">
            <p className="overlay-desc-textcontainer-items">
              {user.userDetails ? user.userDetails.institution_id : "Unknown"}
            </p>
            <p className="overlay-desc-textcontainer-items">
              {user.userDetails ? user.userDetails.email : "Unknown"}
            </p>

            <span className="overlay-desc-textcontainer-items">
              {user.userDetails ? user.userDetails.branch : "Unknown"} &nbsp;
              {user.userDetails ? user.userDetails.semester : "Unknown"}
            </span>
          </div>
        </div>
        {/* <div className="overlay-edit-icon">
          <i className="fas fa-edit"></i>
          {/* <img className="edit-icon" src="assets/editicon3.png" alt="" />{" "} */}
      </div>
    </>
  );
}
export default ProfileOverlay;
