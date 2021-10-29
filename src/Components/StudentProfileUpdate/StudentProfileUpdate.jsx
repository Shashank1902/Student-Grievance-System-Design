import React from "react";
import "./studentprofileupdate.css";

export default function StudentProfileUpdate() {
  return (
    <>
      <div className="stdEditProfile">
        <div className="stdEditProfileWrapper">
          <div className="stdProfileImgBox">
            <img className="stdEditProfileImg" src="assets/user.png" alt="" />
            <button className="stdUploadBtn">
            <i className="fas fa-camera "></i>
          </button>
          </div>
          <hr className="stdProfileHr" />

          <form className="edit-profile-form">
            <div className="title-of-form">
              <span>Edit Profile</span>
            </div>
              
            <div className="stdEditProfileInputContainer">
              <div className="stdEditProfileInputBox">
                <div className="stdEditProfilHeading">
                  <label className="label-for-input">Name:</label>
                </div>
                <div className="stdProfileEditInputbox">
                  <input
                    className="input-for-form"
                    type="text"
                    placeholder="Type Your Name"
                  />
                </div>
              </div>

              <div className="stdEditProfileInputBox">
              <div className="stdEditProfilHeading">
                  <label className="label-for-input">Enrollment No:</label>
                </div>
                <div className="stdProfileEditInputbox">
                  <input
                    className="input-for-form"
                    type="text"
                    placeholder="Type Your Enrollment No"
                  />
                </div>
              </div>

              <div className="stdEditProfileInputBox">
              <div className="stdEditProfilHeading">
                  <label className="label-for-input">Mobile No:</label>
                </div>
                <div className="stdProfileEditInputbox">
                  <input
                    className="input-for-form"
                    type="text"
                    placeholder="Type Your Mobile No"
                  />
                </div>
              </div>
              <div className="stdEditProfileInputBox">
              <div className="stdEditProfilHeading">
                  <label className="label-for-input">Email:</label>
                </div>
                <div className="stdProfileEditInputbox">
                  <input
                    className="input-for-form"
                    type="text"
                    placeholder="Type Your Email"
                  />
                </div>
              </div>

              <div className="stdEditProfileInputBox">
              <div className="stdEditProfilHeading">
                  <label className="label-for-input">Branch:</label>
                </div>
                <div className="stdProfileEditInputbox">
                  <input
                    className="input-for-form"
                    type="text"
                    placeholder="Type Your Branch"
                  />
                </div>
              </div>

              <div className="stdEditProfileInputBox">
              <div className="stdEditProfilHeading">
                  <label className="label-for-input">Semester:</label>
                </div>
                <div className="stdProfileEditInputbox">
                  <input
                    className="input-for-form"
                    type="text"
                    placeholder="Type Your Semester"
                  />
                </div>
              </div>
            </div>

            <div className="container-of-button">
              <button className="button-for-submit" id="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
