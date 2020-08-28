import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NoPageFound from "./components/NoPageFound";
import Home from "./components/Home";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image"
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Revision from "./components/Revision";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/country-capital-quiz">
        <Image src="/../public/logo1.png" roundedCircle />
          Country capitals App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            <Nav.Link href="/revision">Revision</Nav.Link>
            <Nav.Link href="/quiz">Take Quiz</Nav.Link>
          </Nav>
          <Nav activeKey={window.location.pathname}>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className="pb-1">
        <Switch>
          <Route exact path="/country-capital-quiz" component={Home} />
          <Route path="/revision" component={Revision} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/contact" component={Contact} />
          <Route component={NoPageFound} />
        </Switch>
      </Jumbotron>
    </Router>
  );
};

export default App;
