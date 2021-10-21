import "./profilecard.css";
import { useAuthState } from "../../context/ContextIndex";

function ProfileCard() {
  const user = useAuthState();

  return (
    <>
      <div className="profile-container-box">
        <div className="profile-image-cont">
          <img className="profile-img" src="assets/user.png" alt="" />
          {/* <button className="camera-btn">
            <i className="fas fa-camera"></i>
          </button> */}
        </div>

        <div className="text-container">
          <p className="title-text">
            {user.userDetails ? user.userDetails.username : "Unknown"}
          </p>

          <div className="desc-textcontainer">
            <p className="desc-textcontainer-items">
              {user.userDetails ? user.userDetails.institution_id : "Unknown"}
            </p>
            <p className="desc-textcontainer-items">
              {user.userDetails ? user.userDetails.email : "Unknown"}
            </p>
            <p className="desc-textcontainer-items">
              {user.userDetails ? user.userDetails.mob_no : "Unknown"}
            </p>
            <span className="desc-textcontainer-items">
              {user.userDetails ? user.userDetails.branch : "Unknown"} &nbsp;
              {user.userDetails ? user.userDetails.semester : "Unknown"}
            </span>
          </div>
        </div>

        <div className="edit-icon">
          <i className="fas fa-edit"></i>
          {/* <img className="edit-icon" src="assets/editicon3.png" alt="" />{" "} */}
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
