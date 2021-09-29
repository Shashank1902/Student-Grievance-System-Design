import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import CreatePost from "../Components/CreatePost/CreatePost";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import UploadPost from "../Components/UploadPost/UploadPost";


class StudentCommunity extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <UploadPost/>
        {/* <CreatePost/> */}
        <Chatbot />
        <Footbar />
      </div>
    );
  }
}

export default StudentCommunity;
