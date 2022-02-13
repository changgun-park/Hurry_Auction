import React from "react";
import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Login from "./components/UserAuth/Login/Login";
import Signup from "./components/UserAuth/Signup/Signup";
import AuthContext from "./store/auth-context";
import MyPageRequest from "./components/MyPage/MyPageRequest.js";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        {authCtx.isLoggedIn ? <HomePage /> : <LandingPage />}
      </Route>
      <Route path="/login">
        {authCtx.isLoggedIn ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/signup">
        {authCtx.isLoggedIn ? <Redirect to="/" /> : <Signup />}
      </Route>
      <Route path="/profile/request/:userEmail">
        <MyPageRequest />
      </Route>
    </Switch>
  );
}

export default App;
