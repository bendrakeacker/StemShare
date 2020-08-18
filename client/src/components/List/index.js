import React from "react";
import "./style.css";
export function List({ children }) {
    return (
        <>
            <div class="uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center card uk-align-center" >
                <div>
                    <div class="uk-card-large uk-card-default uk-card-body uk-width-1-2 uk-position-center card">
                        <h2>My Projects</h2>

                        <div className="list-overflow-container">
                            <ul className="list-group">{children}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function ListItem(props) {
return <li className="list-group-item"><button onClick={() => {
    props.handleClick(props.name, props.fileId);
} }>{props.name}</button></li>;
}
export default List;