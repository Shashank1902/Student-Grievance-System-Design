import React from "react";
import "./App.css";
import Help from "./Pages/Help";
import MentalHealth from "./Pages/MentalHealth";
import Profile from "./Pages/Profile";
import StudentCommunity from "./Pages/StudentCommunity";
import StudentHome from "./Pages/StudentHome";
import FeeRelatedIssues from "./Pages/FeeRelatedIssues";
import LostandFound from "./Pages/LostandFound";
import AntiRagging from "./Pages/AntiRagging";
import TransportationIssues from "./Pages/TransportationIssues";
import LibandLabIssues from "./Pages/LibandLabIssues";
import Contact from "./Pages/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="app">
      <StudentHome/>
      <MentalHealth/>
      <FeeRelatedIssues/>
      <LostandFound/>
      <AntiRagging/>
      <TransportationIssues/>
      <LibandLabIssues/>
      {/* <StudentCommunity />  */}
      {/* <Help /> */}
      {/* <Profile /> */}
      {/* <Contact /> */}
      {/* <LoginPage/> */}
      </div>
    );
  }
}

export default App;
