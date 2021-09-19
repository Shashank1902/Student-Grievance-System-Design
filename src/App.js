import React from "react";
import "./App.css";
import Chatbot from "./Components/Chat bot/Chatbot";
import Grievanceform from "./Components/GrievanceForm/Grievanceform";
import HomeContent from "./Components/Home content/Homecontent";
import Categorysection from "./Components/CategorySection/Categorysection";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import Footbar from "./Components/Footbar/footbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <HomeContent />
        <Grievanceform />
        <Chatbot />
        <Categorysection />
        <Footbar />
      </div>
    );
  }
}

export default App;
