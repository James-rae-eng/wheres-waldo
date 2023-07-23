import React from "react";
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

    const getClickCoords = (event) => {
        var e = event.target;
        var dim = e.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;
        return [x.toFixed(0), y.toFixed(0)];
    };
  
    const handleClick = (event) => {
        //Get coordinates (as an array of [x,y] )
        let coords = getClickCoords(event);
  
        console.log(coords);
    };

    return (
        <div className="picMain">
            <img className="main" src={waldoMain} onClick={handleClick} alt="Main where's waldo pic"/>
        </div>
    )
}

export default Photo;