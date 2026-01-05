import React from "react";
import Lection from "./lection";
import Practice from "./practice";
import { Link } from "react-router-dom";

function index(){
    return(
        <div className={"main"}>
            <div className={"slider"}>
                <div className={"slide b"}>
                    <Link to={'/lection'}>
                        <div className="slide__element">Lection</div>
                    </Link>
                </div>
                <div className={"slide r"}>
                    <Link to={'/practice'}>.
                        <div className="slide__element">Practice</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default index;