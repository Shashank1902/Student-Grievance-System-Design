import "./profilecard.css";
import { useAuthState } from "../../context/ContextIndex";

function ProfileCard() {
  const user = useAuthState();

  return (
    <div>
      <div className="container-box">
        <div className="image">
          <img className="profile-img" src="assets/user.png" alt="" />

          <img id="cam-placement" src="assets/cameraicon.png" alt="" />
        </div>

        <div className="text-container">
          <p className="title-text">
            {user.userDetails ? user.userDetails.username : "Unknown"}
            {/* {user.userDetails.username || "Unknown"} */}
          </p>

          <div className="desc-textcontainer">
            <span className="desc-textcontainer1">
              <p className="container1-items">
                {user.userDetails ? user.userDetails.branch : "Unknown"}
              </p>

              <p className="container1-items">
                {user.userDetails ? user.userDetails.mob_no : "Unknown"}
              </p>

              <p className="container1-items">
                {user.userDetails ? user.userDetails.institution_id : "Unknown"}
              </p>
            </span>

            <span className="desc-textcontainer2">
              <p className="container2-itmes">
                {user.userDetails ? user.userDetails.email : "Unknown"}
              </p>

              <p className="container2-items">
                {user.userDetails ? user.userDetails.semester : "Unknown"}
              </p>
            </span>
          </div>
        </div>

        <div>
          <img className="edit-icon" src="assets/editicon3.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
