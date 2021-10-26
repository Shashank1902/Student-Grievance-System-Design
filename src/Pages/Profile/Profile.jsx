import React, { useEffect, useState,useRef } from "react";
import Chatbot from "../../Components/Chat bot/Chatbot";
import Footbar from "../../Components/Footbar/Footbar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Grievance from "../../Components/Grievance/Grievance";
import Post from "../../Components/Post/Post";
import "./profile.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  logout,
  useAuthDispatch,
  useAuthState,
} from "../../context/ContextIndex";
import StudentGrevanceOverlay from "../../Components/StudentGrievanceOverlay/StudentGrevanceOverlay";
import StudentProfileUpdate from "../../Components/StudentProfileUpdate/StudentProfileUpdate";

const Profile = () => {
  let history = useHistory();
  const dispatch = useAuthDispatch();
  const user = useAuthState();

  const [posts, setPosts] = useState([]);
  const [grievances, setGrievances] = useState([]);

  const stdOverlayConatiner = useRef("null");
  const stdGrievanceOverlayCrossBtn = useRef("null");
  const stdGrievanceOverlayHandler = useRef("null");
  const stdProfile = useRef("null");
  const overlay = useRef("null");
  const footbar = useRef("null");
  const stdShowLessBtn = useRef("null");
  const stdOverlayContainer = useRef("null");


  useEffect(() => {
    const token = user.token;

    const loadPost = () => {
      axios
        .get(
          `https://sgsapi.herokuapp.com/userpost/${user.userDetails.user_id}`,
          {
            headers: { "auth-token": token },
          }
        )
        .then((result) => {
          setPosts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const loadGrievance = () => {
      axios
        .get(
          `https://sgsapi.herokuapp.com/gri/usergrievance/${user.userDetails.user_id}`,
          {
            headers: { "auth-token": token },
          }
        )
        .then((result) => {
          setGrievances(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    loadPost();
    loadGrievance();

    stdGrievanceOverlayHandler.current.addEventListener("click" , ()=>{
      stdOverlayConatiner.current.classList.remove("hidden");
      stdGrievanceOverlayCrossBtn.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
      footbar.current.classList.add("hidden");
    });
    stdGrievanceOverlayCrossBtn.current.addEventListener("click" , ()=>{
      stdOverlayConatiner.current.classList.add("hidden");
      stdGrievanceOverlayCrossBtn.current.classList.add("hidden");
      footbar.current.classList.remove("hidden");
      overlay.current.classList.add("hidden");
    });




  }, [user]);

  const handleLogout = () => {
    logout(dispatch);
    history.push("/login");
  };

  return (
    <>
    
    <div className="overlay hidden" ref={overlay}></div>
    <div className="stdOverlayConatiner hidden" ref={stdOverlayConatiner}>
        <StudentGrevanceOverlay />
      </div>
      <img
      ref={stdGrievanceOverlayCrossBtn}
        className="stdGrievanceOverlayCrossBtn hidden"
        src="assets/admin-overlay-cross.png"
        alt=""
      />
    <div className="stdProfile" ref={stdProfile}>

      <TopNavbar />
      <div className="profile-middle-cont">
        <div className="xyz">
          <ProfileCard />
        </div>
        <div className="profile-btn-container">
          <div className="gri-btn-container">
            <p className="gri-btn">Solved Grievance</p>
            <p className="gri-btn">Pending Grievance</p>
            <p className="gri-btn">Bookmarked Grievance</p>
          </div>
          <div className="logout-btn" onClick={handleLogout}>
            <p>Sign-out</p>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
      
    
      <div className="abc">
        <div className="profilePostContainer">
          {posts.length > 0
            ? posts.map((post, i) => <Post key={post.post_id} post={post} />)
            : "Post something to the community first!"}
        </div>
        <div className="grievanceContainer" ref={stdGrievanceOverlayHandler}>
          {grievances.length > 0
            ? grievances.map((grievance, i) => (
                <Grievance key={grievance.gri_id} grievance={grievance} />
              ))
            : "No Grievance reported!"}
        </div>
      </div>

      <Chatbot />
      <div ref={footbar} className="">
          <Footbar />
        </div>
    </div>
    </>
  );
};

export default Profile;
