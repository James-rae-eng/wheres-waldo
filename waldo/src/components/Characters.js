import React from "react";
import waldo1 from "../assets/waldo1.png";
import waldo2 from "../assets/waldo2.png";
import waldo3 from "../assets/waldo3.png";

function Characters(props) {
    return (
        <div className="characters">
            <img className="waldo1" src={waldo1} alt="waldo 1" 
                style={{border: "3px solid "+ props.waldo1}}
            />
            <img className="waldo2" src={waldo2} alt="waldo 2" 
                style={{border: "3px solid "+ props.waldo2}}
            />
            <img className="waldo3" src={waldo3} alt="waldo 3" 
                style={{border: "3px solid "+ props.waldo3}}
            />
        </div>
    )
}

export default Characters;