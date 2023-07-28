import React, { useState } from "react";
import waldoMain from '../assets/waldoMain.jpg';

function Photo(props) {
    const [circle, setCircle] = useState(null);
    
    const checkCorrect = (x, y) => {
        // Check props to see if coordinates match, to within 15 pixels, return the name of the character if they do
        let result = null;

        props.characters.forEach(function(character, index) {
            if (character.xcoordinate > (x-25) && character.xcoordinate < (x+25)) {
                if (character.ycoordinate > (y-25) && character.ycoordinate < (y+25)) {
                    result = index;
                }
            }
        });  
        return result;
    }

    const getClickCoords = (event) => {
        var e = event.target;
        var dim = e.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;
        return [x.toFixed(0), y.toFixed(0)];
    };
  
    const handleClick = (event) => {
        // Set circle colour
        let circleColour = "red";
        // Get coordinates (as an array of [x,y] )
        let coords = getClickCoords(event);
        let [x,y] = [(Number(coords[0])-15), (Number(coords[1])-15)];
        // Check if coordinates are correct or not (with Api)
        let result = checkCorrect(x, y);
        // if coordinates are correct set circle to green and update character border
        if (result !== null) {
            circleColour = "green";
            props.updateCharacter(result);  
        }
        // Create a circle to show area clicked
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