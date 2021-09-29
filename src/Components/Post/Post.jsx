import "./post.css";
// import React, { Poll } from 'react';
// import Poll from 'react-polls';

function Post() {
  return (
    <div>
      <div className="container">
        <div className="post-card" id="post-card1">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" />
                <div className="profile-name">
                  <span className="font-weight-bold">Student-name I</span>
                  <div className="time">
                    {" "}
                    <small class="">20 mins</small>
                  </div>
                </div>
              </div>
              <i className="icon">
                <img src="assets/menuicon.png" />
              </i>
            </div>
            <div className="caption">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="post-pic">
              {" "}
              <img width="760px" src="assets/postimage.png" />
            </div>
          </div>
        </div>
        <div className="post-card" id="post-card2">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" />
                <div className="profile-name">
                  <span className="font-weight-bold">Student-name II</span>
                  <small className="time">20 mins</small>
                </div>
              </div>
              <i className="icon">
                <img src="assets/menuicon.png" />
              </i>
            </div>

            <div className="caption">
              <p>
                {" "}
                <b> Poll 1</b>
              </p>
            </div>
          </div>
        </div>
        <div className="post-card" id="post-card3">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" />
                <div className="profile-name">
                  <span className="font-weight-bold">Student-name III</span>
                  <small className="time">20 mins</small>
                </div>
              </div>
              <i className="icon">
                <img src="assets/menuicon.png" />
              </i>
            </div>

            <div className="caption">
              <p>
                {" "}
                <b>Poll 2</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
