import React from "react";
function Form () {
    return (
        <>
            <div className="uk-position-center">
                <h3>Create a New Project</h3>
                <form>
                    <input class="uk-input uk-form-width-large" type="text" placeholder="Project Name"></input>
                    <br></br>
                    <input class="uk-input uk-form-width-large" type="text" placeholder="Add contributors"></input>
                    <br></br>
                    <input class="uk-input uk-form-width-large" type="text" placeholder="Add file(s)"></input>
                    <br></br>
                    <button>Add New Project</button>
                </form>
            </div>
        </>
    );
}
export default Form;

