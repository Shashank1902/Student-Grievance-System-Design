import { useRef, useState, useEffect } from "react";
import "./createpost.css";

function CreatePost() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  const aboutPost = useRef("null");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(aboutPost.current.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();

    document.querySelector("textarea").rows = "3";
    document.querySelector(".post-img").style.minHeight = "350px";
    // document.querySelector(".createpost-container").style.top = "75%";
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
          placeholder="What's on your mind?"
          ref={aboutPost}
        ></textarea>

        <div className="post-img-box">
          <img
            className="post-img"
            src={preview}
            // style={{ objectFit: "contain" }}
            onClick={() => {
              setImage(null);
            }}
          />
        </div>

        <div className="addpost">
          <span>
            <img className="PostLogo" src="assets/poll.png" alt="" />
          </span>

          <span>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                console.log( event.target.files[0]); 

                if (file) {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />

            <img
              className=" PostLogo"
              src="assets/PostLogo/gallery.png"
              alt=""
              onClick={handleClick}
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
