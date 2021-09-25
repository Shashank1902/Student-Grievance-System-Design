import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";

class Profile extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <Grievanceform />
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default Profile;