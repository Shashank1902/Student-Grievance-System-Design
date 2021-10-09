import axios from "axios";
import { useRef } from "react";
import "./createpost.css";
import { useAuthState } from "../../context/ContextIndex";

function CreatePost() {
  const user = useAuthState();

  const postDesc = useRef("");
  const postImg = useRef("");
  const userId = user.userDetails.user_id;
  const token = user.token;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/post",
        {
          postDesc: postDesc.current.value,
          postImg: postImg.current.value,
          userId: userId,
        },
        {
          headers: { "auth-token": token },
        }
      )
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          placeholder="Write here!"
          ref={postDesc}
        ></textarea>

        <div className="addpost">
          <span>
            <img className="PostLogo" src="assets/poll.png" alt="" />
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
