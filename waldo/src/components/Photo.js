import React, { useState } from "react";
import waldoMain from '../assets/waldoMain.jpg';

function Photo(props) {
    /*<div>
        <h1>These books are from the API</h1>
        {props.photo.map((photo) => {
            return <div key={photo.id}>
                        <h2>{photo.title}</h2>
                    </div>
        })}
    </div>*/

    const [circle, setCircle] = useState(null);

    const getClickCoords = (event) => {
        var e = event.target;
        var dim = e.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;
        return [x.toFixed(0), y.toFixed(0)];
    };
  
    const handleClick = (event) => {
        // Get coordinates (as an array of [x,y] )
        let coords = getClickCoords(event);

        // Check if coordinates are correct or not (with Api)

        // Set circle colour
        let circleColour = "red";

        // Create a circle to show area clicked
        let [x,y] = [(Number(coords[0])-15), (Number(coords[1])-15)];
        let newCircle = (
            <div className="circle"
            style={{
                left:(x)+"px", 
                top:(y)+"px",
                border: "3px solid "+ circleColour
            }}
            />
        );
  
        // update 'circles'
        setCircle(newCircle);
  
        console.log(coords);
    };

    return (
        <div className="picMain">
            <div className="main" style={ { backgroundImage: "url("+waldoMain+")" } } onClick={handleClick}>
                <div>{circle}</div>
            </div>
        </div>
    )
}

export default Photo;