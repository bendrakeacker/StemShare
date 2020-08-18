import React from "react";

function Nav() {
  return (
    <>
        <nav className="uk-navbar-container nav " >
            <div className="uk-navbar-left title uk-text-center">
                <h2 className="uk-text-center uk-padding-small">StemShare</h2>
            </div>
            {/* <div class="uk-navbar-right links">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li>
                        <a href="#">Parent</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div> */}
        </nav>
    </>
  );
}

export default Nav;