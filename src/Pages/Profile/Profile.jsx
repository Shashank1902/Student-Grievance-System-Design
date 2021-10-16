import React from "react";
import Chatbot from "../../Components/Chat bot/Chatbot";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../../Components/Footbar/Footbar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Grievance from "../../Components/Grievance/Grievance";
import Post from "../../Components/Post/Post";
import "./profile.css"
import { useHistory } from "react-router-dom";

import { logout, useAuthDispatch } from "../../context/ContextIndex";

const Profile = () => {
  let history = useHistory();
  const dispatch = useAuthDispatch()

  const handleLogout= () => {
    logout(dispatch) 
    history.push('/login')
  }
    return (
      <div className="App">
        <TopNavbar />
        <div className="xyz">
          <ProfileCard />
        </div>
        <div>
          <div className="outer-container">
            <div className="category">
              <p className="bttn-item" onClick={handleLogout}>LOGOUT</p>
              <p className="bttn-item">Selected Grievance</p>
              <p className="bttn-item">Pending Grievance</p>
              <p className="bttn-item">Bookmarked Grievance</p>
            </div>
          </div>
          <div className="abc">
            <Post />
            <Grievance />
          </div>
        </div>
        <Chatbot />
        <Footbar />
      </div>
    );
}

export default Profile;
