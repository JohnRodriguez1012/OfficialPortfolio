import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavTabs from "./Components/Navbar/NavTabs.js";
import Landing from "./Components/Landing/Landing.js";
import FAQ from "./Components/FAQ/FAQ.js";
import Contact from "./Components/Contact/Contact.js";
import Projects from "./Components/Projects/Projects.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";

const App = () => (
  // from MyPRofile, setting the state of the app
  <Router>

   <div>
      <NavTabs />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/AboutMe" component={AboutMe} />        
      </Switch>
      <Contact />
    </div>
  </Router> 


    )

export default App;
