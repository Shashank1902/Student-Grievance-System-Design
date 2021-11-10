import "./profileoverlay.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "../../context/ContextIndex";

function ProfileOverlay({ userId }) {
  const user = useAuthState();
  const [users, setUsers] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`https://sgsapi.herokuapp.com/studentuser/${userId}`, {
        headers: { "auth-token": user.token },
        cancelToken: source.token,
      })
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        // console.log(err);
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      });

    return () => {
      source.cancel();
    };
  }, [user.token, userId]);

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
            {users ? users.username : "Unknown"}
          </p>

          <div className="overlay-desc-textcontainer">
            <p className="overlay-desc-textcontainer-items">
              {users ? users.institution_id : "Unknown"}
            </p>
            <p className="overlay-desc-textcontainer-items">
              {users ? users.email : "Unknown"}
            </p>

            <span className="overlay-desc-textcontainer-items">
              {users ? users.branch : "Unknown"} &nbsp;
              {users ? users.semester : "Unknown"}
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
