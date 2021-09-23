import React from "react";
import "./App.css";
import MentalHealth from "./Pages/MentalHealth";
import StudentHome from "./Pages/StudentHome";

class App extends React.Component {
  render() {
    return (
      <div className="app">
      <StudentHome/>
      {/* <MentalHealth/> */}
      {/* <LoginPage/> */}
      </div>
    );
  }
}

export default App;
