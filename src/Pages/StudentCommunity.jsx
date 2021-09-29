import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
 import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import Categorysection from "../Components/CategorySection/Categorysection";
import UploadPost from "../Components/UploadPost/UploadPost";


class StudentCommunity extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <UploadPost/>
        {/* <Grievanceform /> */}
        <Chatbot />
        {/* <Footbar /> */}
        {/* <Categorysection /> */}
      </div>
    );
  }
}

export default StudentCommunity;
