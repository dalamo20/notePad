import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
<div className="container">
    <div className="row mt-5">
        <div className="col-12">
            <div className="jumbotron">
                <h1 className="display-4">Greetings!</h1>
                <p className="lead">Welcome to this app!</p>
                <hr className="my-4" />
                <Link to="/list" className="btn btn-primary btn-lg">Go to my</Link>
            </div>
        </div>
    </div>
</div>  
)
export default Welcome;