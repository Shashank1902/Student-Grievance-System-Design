import axios from "axios";
import { cancel, format } from "timeago.js";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "../../context/ContextIndex";
import "./post.css";
import ProfileOverlay from "../Profile Overlay/ProfileOverlay";

function Post({ post }) {
  const user = useAuthState();

  const [username, setUsername] = useState("");
  const [upvote, setUpVote] = useState(
    post.upvote.length - post.downvote.length
  );
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const postmenubox = useRef("null");
  const postmenubtn = useRef("null");
  const imgclickableoverlayprofile = useRef("null");
  const nameclickableoverlayprofile = useRef("null");
  const postprofileoverlay = useRef("null");
  const overlayclosebtn = useRef("null");
  const reportbtn = useRef("null");
  const reportbox = useRef("null");
  const reportboxreport = useRef("null");
  const reportboxcancel = useRef("null");

  useEffect(() => {
    axios
      .get(`https://sgsapi.herokuapp.com/user/${post.user_id}`, {
        headers: { "auth-token": token },
      })
      .then((result) => {
        setUsername(result.data.username);
      })
      .catch((err) => {
        console.log(err);
      });

    postmenubtn.current.addEventListener("click", () => {
      postmenubox.current.classList.toggle("postmenubox-hidden");
    });

    imgclickableoverlayprofile.current.addEventListener("click", () => {
      postprofileoverlay.current.classList.toggle("overlay-profile-hidden");
    });

    nameclickableoverlayprofile.current.addEventListener("click", () => {
      postprofileoverlay.current.classList.toggle("overlay-profile-hidden");
    });

    overlayclosebtn.current.addEventListener("click", () => {
      postprofileoverlay.current.classList.toggle("overlay-profile-hidden");
    });

    reportbtn.current.addEventListener("click", () => {
      reportbox.current.classList.remove("report-cont-hidden");
    });
    reportboxcancel.current.addEventListener("click", () => {
      reportbox.current.classList.add("report-cont-hidden");
    });
    reportboxreport.current.addEventListener("click", () => {
      reportbox.current.classList.add("report-cont-hidden");
    });
  }, []);

  const upvoteHandler = () => {
    setUpVote(isUpVoted ? upvote - 1 : upvote + 1);
    setIsUpVoted(!isUpVoted);
    axios
      .put(
        `https://sgsapi.herokuapp.com/post/upvote/${post.post_id}`,
        { user: user.userDetails.user_id },
        {
          headers: { "auth-token": token },
        }
      )
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const downvoteHandler = () => {
    setUpVote(isDownVoted ? upvote + 1 : upvote - 1);
    setIsDownVoted(!isDownVoted);
    axios
      .put(
        `https://sgsapi.herokuapp.com/post/downvote/${post.post_id}`,
        { user: user.userDetails.user_id },
        {
          headers: { "auth-token": token },
        }
      )
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // {const [dropdownOpen, setOpen] = useState(false);

  // const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="post-container">
      <div className="post-menubox postmenubox-hidden" ref={postmenubox}>
        <div className="menubox-inner">
          <i className="fa fa-flag menubox-icon"></i>
          <button className="menubox-text" ref={reportbtn}>
            Report Post
          </button>
        </div>
        <div className="report-cont report-cont-hidden" ref={reportbox}>
          <form>
            <label className="report-cont-title">Report Post</label>
            <div className="report-items">
              {" "}
              <input type="radio" value="report-option-1"  id="one" name="report-radio" />
              <label htmlFor="one">False information</label>
            </div>
            <div className="report-items">
              <input type="radio" value="report-option-2" id="two" name="report-radio" />
              <label htmlFor="two">Hateful or abusive post</label>{" "}
            </div>
            <div className="report-items">
              <input type="radio" value="report-option-3" id="three" name="report-radio" />
              <label htmlFor="three">Spam or misleading</label>
            </div>
            <div className="report-items">
              <input type="radio" value="report-option-4" id="four" name="report-radio" />
              <label htmlFor="four">Bullying or harassment </label>
            </div>
          </form>
          <div className="report-cancel-btn">
            <button className="cancel-selection-btn" ref={reportboxcancel}>Cancel</button>
            <button className="cancel-selection-btn" ref={reportboxreport}>Report</button>
          </div>
        </div>

        <div className="menubox-inner">
          <i className="fa fa-eye menubox-icon"></i>
          <button className="menubox-text">View Profile</button>
        </div>
      </div>

      <div className="post-card" id="post-card1">
        <div className="container-inner">
          <div className="profile-outer">
            <div className="profile-card">
              <img
                className="profile-pic"
                ref={imgclickableoverlayprofile}
                src="assets/user.png"
                alt=""
              />
              <div className="profile-name" ref={nameclickableoverlayprofile}>
                <span className="font-weight-bold">{username}</span>
                <div className="time">
                  <small className="">{format(post.created_on)}</small>
                </div>
              </div>
            </div>
            <div
              className="overlay-profile overlay-profile-hidden"
              ref={postprofileoverlay}
            >
              <ProfileOverlay />
              <button className="overlay-cross-btn" ref={overlayclosebtn}>
                <i className="fa fa-window-close" aria-hidden="true"></i>
              </button>
            </div>
            <div className="menu-icon-cont">
              <span className="meatball-icon">
                <button className="icon-btn" ref={postmenubtn}>
                  <i className="fas fa-ellipsis-h meatball-box"></i>
                </button>
              </span>
            </div>
          </div>

          <div className="caption">
            <p>{post.post_desc}</p>
          </div>
          <div className="post-pic-cont">
            <img className="post-pic" src="assets/postimage.png" alt="" />
          </div>
          <div className="vote-btn-container">
            <div className="vote-btn" onClick={upvoteHandler}>
              <i className="fas fa-arrow-alt-circle-up"></i>
            </div>
            <div className="vote">{upvote}</div>
            <div className="vote-btn" onClick={downvoteHandler}>
              <i className="fas fa-arrow-alt-circle-down"></i>
            </div>
          </div>
        </div>
        {/* <div className="report-cont report-cont-hidden" ref={reportbox}>
          <form>
            <label className="report-cont-title">Report Post</label>
            <div className="report-items">
              {" "}
              <input type="radio" value="report-option-1"  id="one" name="report-radio" />
              <label htmlFor="one">False information</label>
            </div>
            <div className="report-items">
              <input type="radio" value="report-option-2" id="two" name="report-radio" />
              <label htmlFor="two">Hateful or abusive post</label>{" "}
            </div>
            <div className="report-items">
              <input type="radio" value="report-option-3" id="three" name="report-radio" />
              <label htmlFor="three">Spam or misleading</label>
            </div>
            <div className="report-items">
              <input type="radio" value="report-option-4" id="four" name="report-radio" />
              <label htmlFor="four">Bullying or harassment </label>
            </div>
          </form>
          <div className="report-cancel-btn">
            <button className="cancel-selection-btn" ref={reportboxcancel}>Cancel</button>
            <button className="cancel-selection-btn" ref={reportboxreport}>Report</button>
          </div>
        </div> */}
      </div>

      {/*         
        <div className="post-card" id="post-card2">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" alt="" />
                <div className="profile-name">
                  <span className="font-weight-bold">Student-name II</span>
                  <small className="time">20 mins</small>
                </div>
              </div>
              <i className="icon">
                <img src="assets/menuicon.png" alt="" />
              </i>
            </div>

            <div className="caption">
                
            </div>
          </div>
        </div>

        <div className="post-card" id="post-card3">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" alt="" />
                <div className="profile-name">
                  <span className="font-weight-bold">Student-name III</span>
                  <small className="time">20 mins</small>
                </div>
              </div>
              <i className="icon">
                <img src="assets/menuicon.png" alt="" />
              </i>
            </div>

            <div className="caption">
                <b>Poll 2</b>
            </div>
          </div>
        </div> */}
    </div>
  );
}
export default Post;
