import React, { useState }  from "react";
import waldo1 from "../assets/waldo1.png";
import waldo2 from "../assets/waldo2.png";
import waldo3 from "../assets/waldo3.png";

function Characters(props) {
    const [first, setfirst] = useState("red");
    const [second, setsecond] = useState("red");
    const [third, setthird] = useState("red");

    /*
    When character is correclty selected update the appropriate state
    */

    return (
        <div className="characters">
            <img className="waldo1" src={waldo1} alt="waldo 1" style={{border: "3px solid "+ first}}/>
            <img className="waldo2" src={waldo2} alt="waldo 2" style={{border: "3px solid "+ second}}/>
            <img className="waldo3" src={waldo3} alt="waldo 3" style={{border: "3px solid "+ third}}/>
        </div>
    )
}

export default Characters;