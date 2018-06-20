import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
    <div className="container">
        <div className="col-12">
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4">
                    <Link to="/list" className="btn btn-primary btn-lg">Go to my</Link>
                </hr>
            </div>
        </div>
    </div>
)
export default Welcome;