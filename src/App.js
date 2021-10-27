import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

// Importing Routes for students
import AboutUs from "./Pages/AboutUs/AboutUs";
import MentalHealth from "./Pages/MentalHealth";
import Profile from "./Pages/Profile/Profile";
import StudentCommunity from "./Pages/StudentCommunity/StudentCommunity";
import StudentHome from "./Pages/StudentHome";
import FeeRelatedIssues from "./Pages/FeeRelatedIssues";
import LostandFound from "./Pages/LostandFound";
import AntiRagging from "./Pages/AntiRagging";
import TransportationIssues from "./Pages/TransportationIssues";
import LibandLabIssues from "./Pages/LibandLabIssues";
import Contact from "./Pages/Contact";
import Login from "./Pages/LoginPage/Login";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";

import { useAuthState } from "./context/ContextIndex";

import { AdminAuthProvider } from "./context/AuthContext";
import AdminDashboard from "./AdminDashboard";

function App() {
  const user = useAuthState();

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          {/* /////////// Routes for students ////////////// */}
          <Route exact path="/">
            {user.userDetails ? <StudentHome /> : <Login />}
          </Route>
          <Route path="/Login">
            {user.userDetails ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/Register">
            {user.userDetails ? <Redirect to="/" /> : <RegistrationPage />}
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
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Profile" exact component={Profile} />
        </Switch>
      </Router>

      <AdminAuthProvider>
        <Router>
          <Switch>
            <Route path="/admin" component={AdminDashboard} />
          </Switch>
        </Router>
      </AdminAuthProvider>
    </div>
  );
}

export default App;
