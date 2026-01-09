import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Lection(){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/data')
        .then(response => response.json())
        .then((data) => {
            setItems(data[0].lecture)
            console.log(data[0].lecture);   
        })
    },[])
    
    return(
        <div className="background background__lection">
            <div className="back">
                <Link to={'/'}><button className="back__btn btn"><h3>Back</h3></button></Link>
            </div>
            <div className="main__contents">
                <ul className="list">
                    {items.map(item => (
                        <Link to={`/lection/${item.id}`}>
                            <li className="list__element">{item.id}. {item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
};