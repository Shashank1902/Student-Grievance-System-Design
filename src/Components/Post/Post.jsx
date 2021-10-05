import "./post.css";
// import React, { Poll } from 'react';
//import Poll from "react-polls";

function Post() {
//   // const pollQuestion = "Is react-polls useful?";
//   // const pollAnswers = [
//   //   { option: "Yes", votes: 9 },
//   //   { option: "No", votes: 1 },
//   // ];

  // const handleVote = () => {
  //   console.log("voted");
  // }

  return (
    <div>
      <div className="container">
        <div className="post-card" id="post-card1">
          <div className="container-inner">
            <div className="profile-outer">
              <div className="profile-card">
                <img className="profile-pic" src="assets/user.png" alt="" />
                <div className="profile-name">
                  <span className="font-weight-bold">Student-name I</span>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="post-pic">
              {" "}
              <img width="760px" src="assets/postimage.png" alt="" />
            </div>
          </div>
        </div>
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
                {/* <Poll
                  question={pollQuestion}
                  answers={pollAnswers}
                  onVote={handleVote}
                /> */}
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
        </div>
      </div>
    </div>
  );
}
export default Post;
