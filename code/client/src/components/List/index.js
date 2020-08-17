import React from "react";
export function List({ children }) {
    return (
        <>
            <div class="uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center card uk-align-center" uk-grid>
                <div>
                    <div class="uk-card-large uk-card-default uk-card-body uk-width-1-2 uk-position-center">
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
export function ListItem({name}) {
return <li className="list-group-item">{name}</li>;
}
export default List;