import React, { useEffect, useState } from "react";
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

const Profile = () => {
  let history = useHistory();
  const dispatch = useAuthDispatch();
  const user = useAuthState();

  const [posts, setPosts] = useState([]);
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const token = user.token;

    const loadPost = () => {
      axios
        .get(`https://sgsapi.herokuapp.com/userpost/${user.userDetails.user_id}`, {
          headers: { "auth-token": token },
        })
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
  }, [user]);

  const handleLogout = () => {
    logout(dispatch);
    history.push("/login");
  };

  return (
    <div className="App">
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
        {posts.length > 0 ?
          posts.map((post, i) => (
            <Post key={post.post_id} post={post} />
          )) : "Post something to the community first!"
        }
          
        </div>
        <div className="grievanceContainer">
        {grievances.length > 0 ? 
          grievances.map((grievance, i) => (
            <Grievance key={grievance.gri_id} grievance={grievance} />
          )) : "No Grievance reported!"
        }
        </div>
      </div>

      <Chatbot />
      <Footbar />
    </div>
  );
};

export default Profile;
