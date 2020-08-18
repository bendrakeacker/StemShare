import React, { useEffect, Component, useState } from "react";
// import CurrentProject from "./CurrentProject";
// import NewProject from "./NewProject";
import { useParams } from "react-router-dom";
import { List, ListItem } from "../List";
import AddButton from "../AddButton"
import { Dropbox } from 'dropbox';
import ReactAudioPlayer from 'react-audio-player';
import API from "../../utils/API/API"
import AddComment from "../AddComment/AddComment.js";
let dbx;
class Dashboard extends Component {
  state = {
    projects: [],
    filename: "",
    sharedLink: "",
    id: "",
    comments: []
  };
  componentDidMount = () => {
    this.loadFiles();
  }
  loadFiles = () => {
    const queryString = require('query-string');
    const { code } = queryString.parse(window.location.search);
        if (code) {        
            let token = "Axz1C0j9eREAAAAAAAAAAddZeJm6TL9-UR_7zG0LF45bM6n5IFewF1gAEjX7TIoS";
            console.log(token);
            dbx = new Dropbox({ accessToken: token });
            console.log('dbx', dbx)
            // this.loadFiles(dbx);
            dbx.filesListFolder({ path: '' })
            .then(response => {
                
              console.log(response.entries);
              this.setState({projects: response.entries})
            })
            .catch(function (error) {
                console.error(error);
            });
    }
  }
  handleClick = (name, id) => {
    this.setState({sharedLink: name, id: id}, () => {
      console.log(id);

      dbx.filesDownload({path: this.state.sharedLink})

        .then(response => {
          console.log(response);
          let downloadUrl = URL.createObjectURL(response.fileBlob);
          console.log(downloadUrl);
          this.setState({filename: downloadUrl})

         this.updateComments(id);


            
    
        })
    })
  }

  updateComments = (id) => {
    API.getComment(id)
          .then(response => {
            console.log(response);
            this.setState({comments: response.data}, ()=> {
              console.log(this.state.comments);
          });

  })}


  render() {
    return ( 
      <>
        <List> 
         {this.state.projects.map (project => (
           <ListItem name={project.path_lower} fileId={project.id} handleClick={this.handleClick} /> 
         ))}
        </List>
        {(this.state.filename !== "" )? 
        <ReactAudioPlayer
        src={this.state.filename}
        autoPlay
        controls
        />: ""
        }, {(this.state.filename !== "")?
        <>
        <AddComment filename={this.state.id} updateComments={this.updateComments}/>
        {this.state.comments.length > 0 && this.state.comments.map (comment => {
          return (
            <>
            <p>{comment.name}</p>
            <p>{comment.contents}</p>
            <p>{comment.createdAt}</p>
          </>
          )
         })}
         </>
        :""}
        <AddButton />
       
        


      </>
    );
   }
}

export default Dashboard;


