import React, {useEffect} from "react";
import LectionStyle from "../css/lection.css"
import { Link } from "react-router-dom";

function lection(){
    
    fetch('../data/data.json')
    .then((response) => {response.json()})
    .then((data) => {
        console.log(data);   
    })
    
    return(
        <Link to={'/'}>Back</Link>
    )
}

export default lection