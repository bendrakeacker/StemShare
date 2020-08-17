import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddButton from "./components/AddButton"
import NewProject from "./components/pages/NewProject"
// import Jumbotron from "./components/Jumbotron"
// import List from "./components/List";

import { Dropbox } from 'dropbox';




function App() {
      return (
        
          <Router>
            <Nav />
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/newproject" component={NewProject}/>

            {/* <List /> */}
     
      
          </Router>
      )
}
  

export default App;


