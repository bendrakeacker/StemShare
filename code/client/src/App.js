import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import LoginCard from "./components/LoginCard";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron"
// import List from "./components/List";

import { Dropbox } from 'dropbox';

const accessToken = '3fL2XK-4RgAAAAAAAAAAAXdn0GilqKuw2vMSCHi1nvj_QTbqcUouf-wnqCPvbaG8';

const dbx = new Dropbox({  
  accessToken,  
  fetch  
});

dbx.filesListFolder({  
  path: ''  
}).then(response => console.log(response))


function App() {
      return (
        
          <>
            <Nav />
            <LoginCard />
            {/* <List /> */}
     
      
          </>
      )
}
  

export default App;


