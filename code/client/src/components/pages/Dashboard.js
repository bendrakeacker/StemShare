import React, { useEffect, Component, useState } from "react";
// import CurrentProject from "./CurrentProject";
// import NewProject from "./NewProject";
import { useParams } from "react-router-dom";
import { List, ListItem } from "../List";
import AddButton from "../AddButton"
import { Dropbox } from 'dropbox';
import API from "../../utils/API/API"
import NewProject from "./NewProject";
import LoginCard from "../LoginCard";
class Dashboard extends Component {
  state = {
    projects: []
  };
  loadUsers (id) {
    API.getProjects(id)
    .then(users => {
      const projects = users
      this.setState({projects});
      console.log(this.state.projects)

    })
    .catch(err => console.log(err));
  }
  componentDidMount() {
    const queryString = require('query-string');
    const { code } = queryString.parse(window.location.search);
        if (code) {        
            let token = "Axz1C0j9eREAAAAAAAAAAddZeJm6TL9-UR_7zG0LF45bM6n5IFewF1gAEjX7TIoS";
            console.log(token);
            var dbx = new Dropbox({ accessToken: token });
            console.log('dbx', dbx)
            this.loadUsers(dbx);
    } 
  }
  render() {
    return ( 
      <>
        <List> 
         {this.state.projects.map (project => (
           <ListItem name={project.login} /> 
         ))}
        </List>
        <AddButton />
      </>
    );
   }
}

export default Dashboard;


