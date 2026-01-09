import React from "react";
import { Link } from "react-router-dom";

export default function Practice(){
    return(
        <div className="background background__practice">
            <div className="back">
                <Link to={'/'}><button className="back__btn btn"><h3>Back</h3></button></Link>
            </div>
            <div className="main__contents">
            </div>
        </div>
    );
};