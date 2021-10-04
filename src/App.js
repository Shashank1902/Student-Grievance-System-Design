import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

// Importing Routes for students
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
import Login from "./Pages/LoginPage/Login";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="app">
    <Router>
      <ScrollToTop />
        <Switch>
          {/* /////////// Routes for students ////////////// */}
          <Route exact path="/">
            {user ? <StudentHome /> : <Login/> }
          </Route>
          <Route path="/Login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/Register">
            {user ? <Redirect to="/" /> : <RegistrationPage />}
          </Route>
          <Route path="/MentalHealth" exact component={MentalHealth} />
          <Route path="/FeeRelatedIssues" exact component={FeeRelatedIssues} />
          <Route path="/LostandFound" exact component={LostandFound} />
          <Route path="/AntiRagging" exact component={AntiRagging} />
          <Route
            path="/TransportationIssues"
            exact
            component={TransportationIssues}
          />
          <Route path="/LibandLabIssues" exact component={LibandLabIssues} />
          <Route path="/StudentCommunity" exact component={StudentCommunity} />
          <Route path="/Help" exact component={Help} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Profile" exact component={Profile} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
