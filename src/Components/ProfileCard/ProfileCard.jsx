import "./profilecard.css";
import { useAuthState } from "../../context/ContextIndex";

function ProfileCard() {
  const user = useAuthState();

  return (
    <div>
      <div class="container-box">
        <div class="image">
          <img class="profile-img" src="assets/user.png" alt="" />

          <img id="cam-placement" src="assets/cameraicon.png" alt="" />
        </div>

        <div class="text-container">
          <p class="title-text">
            {user.userDetails ? user.userDetails.username : "Unknown"}
            {/* {user.userDetails.username || "Unknown"} */}
          </p>

          <div class="desc-textcontainer">
            <span class="desc-textcontainer1">
              <p class="container1-items">
                {user.userDetails ? user.userDetails.branch : "Unknown"}
              </p>

              <p class="container1-items">
                {user.userDetails ? user.userDetails.mob_no : "Unknown"}
              </p>

              <p class="container1-items">
                {user.userDetails ? user.userDetails.institution_id : "Unknown"}
              </p>
            </span>

            <span class="desc-textcontainer2">
              <p class="container2-itmes">
                {user.userDetails ? user.userDetails.email : "Unknown"}
              </p>

              <p class="container2-items">
                {user.userDetails ? user.userDetails.semester : "Unknown"}
              </p>
            </span>
          </div>
        </div>

        <div>
          <img class="edit-icon" src="assets/editicon3.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
