import axios from "axios";
import { useEffect, useState } from "react";
import "./post.css";

function Post({desc, userId}) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    axios.get(`https://sgsapi.herokuapp.com/user/${userId}`)
    .then((result) => {
      setUsername(result.data.username)
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return (
    <div>
      <div className="container">
        <div className="post-card" id="post-card1">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" alt="" />
                <div className="profile-name">
                  <span className="font-weight-bold">{username}</span>
                  <div className="time">
                    {" "}
                    <small className="">20 mins</small>
                  </div>
                </div>
              </div>
              <i className="icon">
                <img src="assets/menuicon.png" alt="" />
              </i>
            </div>
            <div className="caption">
              <p>
                {desc}
              </p>
            </div>
            <div className="post-pic">
              {" "}
              <img width="760px" src="assets/postimage.png" alt="" />
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
    </div>
  );
}
export default Post;
