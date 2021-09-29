import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import Post from "../Components/Post/Post";

import UploadPost from "../Components/UploadPost/UploadPost";


class StudentCommunity extends React.Component {
  render() {
    return (
      <div className="App">

        <TopNavbar />
        <UploadPost/>
        <Post/>
        <Chatbot />
        <Footbar />
      </div>

    );
  }
}
export default StudentCommunity;
