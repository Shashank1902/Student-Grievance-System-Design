import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import React, {Poll} from "react";
import "./App.css";
import Help from "./Pages/Help";
import MentalHealth from "./Pages/MentalHealth";
import Profile from "./Pages/Profile/Profile";
import StudentCommunity from "./Pages/StudentCommunity";
import StudentHome from "./Pages/StudentHome";
import FeeRelatedIssues from "./Pages/FeeRelatedIssues";
import LostandFound from "./Pages/LostandFound";
import AntiRagging from "./Pages/AntiRagging";
import TransportationIssues from "./Pages/TransportationIssues";
import LibandLabIssues from "./Pages/LibandLabIssues";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Login from "./Pages/LoginPage/Login";
import Registration from "./Pages/RegistrationPage/RegistrationPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";


class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="app">
          <Switch>
            <Route path="/" exact component={StudentHome} />
            <Route path="/MentalHealth" exact component={MentalHealth} />
            <Route
              path="/FeeRelatedIssues"
              exact
              component={FeeRelatedIssues}
            />
            <Route path="/LostandFound" exact component={LostandFound} />
            <Route path="/AntiRagging" exact component={AntiRagging} />
            <Route
              path="/TransportationIssues"
              exact
              component={TransportationIssues}
            />
            <Route path="/LibandLabIssues" exact component={LibandLabIssues} />
            <Route
              path="/StudentCommunity"
              exact
              component={StudentCommunity}
            />
            <Route path="/Help" exact component={Help} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/Login" exact component={Login} />
            <Route path="/RegistrationPage" exact component={RegistrationPage} />
           
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
