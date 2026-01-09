import React, {useRef} from "react";
import Right from "../img/icon/right.svg";
import Left from "../img/icon/left.svg"
import { Link } from "react-router-dom";

export default function Index() {
    const sliderRef = useRef();
    function SlideRight() {
        sliderRef.current.scrollBy({
            left: 100,
        });
    }

    function SlideLeft() {
        sliderRef.current.scrollBy({
            left: -100,
        });
    }

    return (
        <div className="main">
            <div className="slider" ref={sliderRef}>
                <div className="slide background background__lection">
                    <button className="slider__btn right btn" onClick={SlideRight}>
                        <img className="icon" src={Right} />
                    </button>
                    <Link to="/lection">
                        <div className="slide__element"><h3>Lection</h3></div>
                    </Link>
                </div>
                <div className="slide background background__practice">
                    <button className="slider__btn left btn" onClick={SlideLeft}>
                        <img className="icon" src={Left} />
                    </button>
                    <Link to="/practice">
                        <div className="slide__element"><h3>Practice</h3></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};