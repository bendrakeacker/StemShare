import React from "react";

function LoginCard() {
  return (
    <>
        <div className="uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center card uk-align-center" uk-grid>
            <div>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-3 uk-position-center">
                    <h2>WELCOME</h2>

                    <div>
                        {/* <input placeholder="email"></input>
                        <br></br>
                        <input placeholder="password"></input>
                        <br></br> */}
                        <a href="https://oauth.pstmn.io/v1/callback">Login with Dropbox</a>
                    </div>
                </div>
            </div>
        </div>  
    </>
  );
}

export default LoginCard;