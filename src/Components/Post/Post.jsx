import axios from "axios";
import { format } from "timeago.js";
import { useEffect, useState } from "react";
import { useAuthState } from "../../context/ContextIndex";
import "./post.css";

function Post({ post }) {
  const user = useAuthState();

  const [username, setUsername] = useState("");
  const [upvote, setUpVote] = useState(
    post.upvote.length - post.downvote.length
  );
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

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
  });

  const upvoteHandler = () => {
    setUpVote(isUpVoted ? upvote - 1 : upvote + 1);
    setIsUpVoted(!isUpVoted);
    // setIsDownVoted(isDownVoted);
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
    // setIsUpVoted(isUpVoted);
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

  return (
    <div className="post-container">
      <div className="post-card" id="post-card1">
        <div className="container-inner">
          <div className="profile-outer">
            <div className="profile-card">
              <img className="profile-pic" src="assets/user.png" alt="" />
              <div className="profile-name">
                <span className="font-weight-bold">
                  {username ? username : "-"}
                </span>
                <div className="time">
                  <small className="">{format(post.created_on)}</small>
                </div>
              </div>
            </div>
            <div className="menu-icon-cont">
              <span className="menu-icon">
                <i className="fas fa-ellipsis-h"></i>
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
            {/* <div className="vote-btn" onClick={isUpVoted ? null : upvoteHandler}> */}
            <div className="vote-btn" onClick={upvoteHandler}>
              <i className="fas fa-arrow-alt-circle-up"></i>
            </div>
            <div className="vote">{upvote}</div>
            {/* <div className="vote-btn" onClick={isDownVoted ? null : downvoteHandler}> */}
            <div className="vote-btn" onClick={downvoteHandler}>
              <i className="fas fa-arrow-alt-circle-down"></i>
            </div>
          </div>
        </div>
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
