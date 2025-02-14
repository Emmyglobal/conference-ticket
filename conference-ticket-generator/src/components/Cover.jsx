import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Cover() {
    return(
        <>
           <div className="cont">
           <div className="jumbotron">
                <p>Updated 1.1</p>
                <h1>Dev Practice Designs File</h1>
            </div> 
            <div class="footer">
                <h4>Ticket Booking App</h4>
                <Link to="/selection">
                    <button>Start</button>
                </Link>
            </div>
           </div>
        </>
    );
};
export default Cover;