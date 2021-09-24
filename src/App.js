import React from "react";
import "./App.css";
import Help from "./Pages/Help";
import MentalHealth from "./Pages/MentalHealth";
import Profile from "./Pages/Profile";
import StudentCommunity from "./Pages/StudentCommunity";
import StudentHome from "./Pages/StudentHome";
import Contact from "./Pages/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="app">
      <StudentHome/>
      {/* <StudentCommunity />  */}
      {/* <Help /> */}
      {/* <Profile /> */}
      {/* <Contact /> */}
      {/* <MentalHealth/> */}
      {/* <LoginPage/> */}
      </div>
    );
  }
}

export default App;
