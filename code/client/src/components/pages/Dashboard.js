import React, { Component } from "react";
import "./App.css";
import CurrentProject from "./CurrentProject";
import NewProject from "./NewProject";

import List from "../List";

function Dashboard() {
  return (
    <>
      {/* <Route exact path={["/newproject"]} component={NewProject} />
      <Route exact path="/currentproject" component={CurrentProject} /> */}
      <List />
    </>
  );
}


export default Dashboard;