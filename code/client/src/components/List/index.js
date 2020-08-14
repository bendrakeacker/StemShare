import React from "react";

function List () {
    return (
        <>
            <div class="uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center card uk-align-center" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body uk-width-1-3 uk-position-center-left">
                    <h2>My Projects</h2>

                    <ul>
                        <li>Project 1 <button><a href="/currentproject"></a>Go to Project</button></li>
                        <li>Project 2 <button><a href="/currentproject"></a>Go to Project</button></li>
                        <li>Project 3 <button><a href="/currentproject"></a>Go to Project</button></li>
                    </ul>
                </div>
            </div>
        </div>  
        </>
    )
}

export default List;