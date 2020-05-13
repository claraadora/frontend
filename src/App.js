import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// const [user, setUser] = useState(currentUser);

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch();
// }, [user]);

// useEffect(() => {}, [currentUser]);
//states
