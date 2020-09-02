import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import NoPageFound from "./components/NoPageFound";
import Home from "./components/Home";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Revision from "./components/Revision";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import logoImage from "./asset/logo1.png";
import WelcomeToQuiz from "./components/WelcomeToQuiz";

const App = () => {
  return (
    <Router basename="/country-capital-quiz">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <NavLink to="/" className="navbar-brand">
          <Image
            src={logoImage}
            style={{ width: "60px" }}
            fluid
            roundedCircle
          />
          {"      "} Country capitals App
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            <NavLink to="/revision" className="nav-link">
              Revision
            </NavLink>

            <NavLink to="/welcometoquiz" className="nav-link">
              Take Quiz
            </NavLink>
          </Nav>
          <Nav activeKey={window.location.pathname}>
            <NavLink to="/contact" className="nav-link">
              Contact us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className="pb-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/revision" component={Revision} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/welcometoquiz" component={WelcomeToQuiz} />
          <Route component={NoPageFound} />
        </Switch>
      </Jumbotron>
    </Router>
  );
};

export default App;
