import "./profilecard.css";
import { useAuthState } from "../../context/ContextIndex";
import {useRef,useEffect} from 'react'
import StudentProfileUpdate from "../StudentProfileUpdate/StudentProfileUpdate";

function ProfileCard() {
  const user = useAuthState();

  const overlay = useRef("null");
  const footbar = useRef("null");
  const stdCrossBtn = useRef("null");
  const stdEditOverlayContainer = useRef("null");
  const stdProfileOverlayOpnBtn = useRef("null");

  useEffect(() => {
  

    stdProfileOverlayOpnBtn.current.addEventListener("click" , ()=>{
      stdEditOverlayContainer.current.classList.remove("hidden");
      stdCrossBtn.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
      
    });
    stdCrossBtn.current.addEventListener("click" , ()=>{
      stdEditOverlayContainer.current.classList.add("hidden");
      stdCrossBtn.current.classList.add("hidden");
    
      overlay.current.classList.add("hidden");
    });




  }, []);
  return (
    <>
     <div className="overlay hidden" ref={overlay}></div>
    <img className="std-overlay-cross hidden" src="assets/admin-overlay-cross.png" alt="" ref ={stdCrossBtn} />
      <div className="hidden" ref={stdEditOverlayContainer}>
      <StudentProfileUpdate/>
      </div>
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

        <div className="edit-icon" ref={stdProfileOverlayOpnBtn}>
          <i className="fas fa-edit"></i>
          {/* <img className="edit-icon" src="assets/editicon3.png" alt="" />{" "} */}
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
