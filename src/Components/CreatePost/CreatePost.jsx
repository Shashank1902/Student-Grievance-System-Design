import { useRef } from "react";
import "./createpost.css";

function CreatePost() {
  
  const aboutPost = useRef("null");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(aboutPost.current.value);
  }
  
  
  
  return (
    <div className="uploadpost-container " onSubmit={handleSubmit}>
      <form action="" className="uploadFrom">
        <div className="top">
          <div className="heading">
            <span>Create Post</span>
          </div>
        </div>

        <div className="post">
          <div className="postContainer-1">
            <span>
              <img
                className="createpost-profile-icon"
                src="assets/profileicon.png"
                alt="User"
              />
            </span>
          </div>

          <div className="postContainer-2">
            <div className="profile-text">
              {" "}
              <span>Sanket Raikwar</span>{" "}
            </div>


          </div>
        </div>

        <textarea
          className="textarea"
          name=""
          id=""
          rows="6"
          placeholder="What's on your mind?"
          ref = {aboutPost}
        ></textarea>

        <div className="addpost">

          <span>
            <img className="PostLogo"
              src="assets/poll.png"
              alt="" />
          </span>

          <span>
            <img
              className=" PostLogo"
              src="assets/PostLogo/gallery.png"
              alt=""
            />
          </span>


        </div>
        <div className="btn-container">
          <button className="btn" type="submit">
            Post
          </button>
        </div>
      </form>

    </div>
  );
}

export default CreatePost;
