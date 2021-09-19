import React from "react";
import "./App.css";
import Chatbot from "./Components/Chat bot/Chatbot";
import Grievanceform from "./Components/GrievanceForm/Grievanceform";
import HomeContent from "./Components/Home content/Homecontent";
import Categorysection from "./Components/CategorySection/Categorysection";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomeContent />
        <Grievanceform />
        <Chatbot />
        <Categorysection />
      </div>
    );
  }
}

export default App;
