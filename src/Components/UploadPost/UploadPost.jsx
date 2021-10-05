import { useEffect, useRef } from "react";
import "./UploadPost.css";
import CreatePost from "../CreatePost/CreatePost";

function UploadPost() {
  const uploadPostContainer = useRef("null");
  const createPostContainer = useRef("null");
  const closeBtn = useRef("null");

  useEffect(() => {
    uploadPostContainer.current.addEventListener("click", (event) => {
      console.log("clicked");
      createPostContainer.current.classList.remove("hidden");
    });

    closeBtn.current.addEventListener("click", (event) => {
      console.log("clicked");
      createPostContainer.current.classList.add("hidden");
    });  }, []);

  return (
    <>
      <div ref={createPostContainer} className="createpost-container hidden">
        <CreatePost />
        <button ref={closeBtn} className="createPostCont-closeBtn">
          <span className="closeBtn">
            <i className="fas fa-times"></i>
          </span>
        </button>
      </div>
      <div ref={uploadPostContainer} className="upload-post-wrapper">
        <div className="profile-icon-cont">
          <img
            className="profile-icon"
            src="assets/profileicon.png"
            alt="Profile"
          />
        </div>
        <div className="upload-post-cont">
          <div className="reccontent">Post something to the community</div>
          <div className="icon-container">
            <img
              className="uploadpost-icon"
              src="assets/PostLogo/gallery.png"
              alt="Choose from galllery"
            />
            
            <img
              className="uploadpost-icon"
              src="assets/poll.png"
              alt="Create a Poll"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default UploadPost;
