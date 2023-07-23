import React from "react";
import waldo1 from "../assets/waldo1.png";
import waldo2 from "../assets/waldo2.png";
import waldo3 from "../assets/waldo3.png";

function Characters(props) {
    return (
        <div className="characters">
            <img className="waldo" src={waldo1} alt="waldo 1"/>
            <img className="waldo" src={waldo2} alt="waldo 2"/>
            <img className="waldo" src={waldo3} alt="waldo 3"/>
        </div>
    )
}

export default Characters;