import React, { useState } from "react";
import Dashboard from "../pages/Dashboard"
import API from "../../utils/API/API";

function AddComment(props) {
    const [comment, setComment] = useState({
        name: "",
        contents: "",
        
      
    });
    
    const handleInputChange = event => {
        setComment({
            ...comment,
            [event.target.name]: event.target.value
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        API.saveComment(comment, props.filename)
            .then(res => {
                console.log(res);
                console.log("testing");
                props.updateComments(props.filename)
                setComment({
                    name: "",
                    contents: "",
                
                })
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <h3>Notes</h3>
            <form>
                <input type="text" name="name" placeholder="Name" className="form-control"
                value={comment.name}
                onChange={handleInputChange} />
                <textarea name="contents" className="form-control" placeholder="Contents"
                onChange={handleInputChange} value={comment.contents}></textarea>
                <button className="btn btn-success" type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </>
    );
}

export default AddComment;