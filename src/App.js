import React, { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("guest");

  //states
  return (
    <Router>
      <div className="App">
        <Nav loggedIn={isLoggedIn} loggedUser={loggedUser} />
        <Switch>
          <Route
            exact
            path="/login"
            component={
              <Nav
                setIsLoggedIn={setIsLoggedIn}
                setLoggedUser={setLoggedUser}
              />
            }
          />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
