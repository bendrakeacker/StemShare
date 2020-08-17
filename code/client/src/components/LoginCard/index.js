import React from "react";


function LoginCard() {
    const apiKey = "id7gfw8lk9f607v";
  return (
    <>
        <div className="uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center card uk-align-center">
            <div>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2 uk-position-center">
                    <h2>WELCOME</h2>

                    <div>
                        {/* <input placeholder="email"></input>
                        <br></br>
                        <input placeholder="password"></input>
                        <br></br> */}
                        <a href={"https://www.dropbox.com/oauth2/authorize?client_id=" + apiKey + "&redirect_uri=http://localhost:3000/dashboard&response_type=code"}>Login with Dropbox</a>
                    </div>
                </div>
            </div>
        </div>  
    </>
  );
}

export default LoginCard;