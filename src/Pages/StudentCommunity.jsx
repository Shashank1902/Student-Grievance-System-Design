import React from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
 import Grievanceform from "../Components/GrievanceForm/Grievanceform";
//import HomeContent from "../Components/Home content/Homecontent";
//import Categorysection from "../Components/CategorySection/Categorysection";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
<<<<<<< HEAD
// import Categorysection from "../Components/CategorySection/Categorysection";
import Post from "../Components/Post/Post";

=======
import Categorysection from "../Components/CategorySection/Categorysection";
import UploadPost from "../Components/UploadPost/UploadPost";
>>>>>>> 54f3c1d8d229414dfa28c170109c60a9f305d827


class StudentCommunity extends React.Component {
  render() {
    return (
      <div className="App">

        <TopNavbar />
        <Post />
        <Chatbot />
        <Footbar />

      </div>

    );
  }
}
export default StudentCommunity;
