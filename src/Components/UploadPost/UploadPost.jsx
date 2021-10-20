import "./UploadPost.css";

function UploadPost() {
  return (
    <>
      <div className="upload-post-wrapper">
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
