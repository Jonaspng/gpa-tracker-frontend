//jshint esversion: 6
import React, { useState,useEffect } from "react";
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Profile2 from "./pages/profile2";
import Login from "./pages/login";
import Register from "./pages/register";

function App(){

  const [auth,setAuthenticated] = useState(false);

  const [semester,setSemester] = useState(0);


  useEffect(() => {
    fetch("https://gpa-tracker2021-api.herokuapp.com/api/profile",{ withCredentials: true, credentials: 'include'})
      .then((res) => res.json())
      .then((semester) => setSemester(semester.userSemester));
  }, []);


  useEffect(() => {
    fetch("https://gpa-tracker2021-api.herokuapp.com/api/auth",{ withCredentials: true,credentials: 'include'})
      .then((res) => res.json())
      .then((auth) => setAuthenticated(auth.message));
  }, []);


  return(
    <Router>
    {auth?
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/profile" exact>
       {semester==0?<Profile />:semester>0?<Profile2 />:null}
      </Route>
      <Redirect to="/"/>
      </Switch>:
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      </Switch>}
    </Router>
  )
}

export default App;