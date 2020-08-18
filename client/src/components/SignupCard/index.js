import React from "react";

function SignupCard() {
  return (
    <>
        <div class="uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center card uk-align-center" uk-grid>
            <div>
                <div class="uk-card-large uk-card-body uk-width-1-3 uk-position-center">
                    <h2>SIGN UP</h2>

                    <div>
                        <input placeholder="email"></input>
                        <br></br>
                        <input placeholder="password"></input>
                        <br></br>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>  
    </>
  );
}

export default SignupCard;