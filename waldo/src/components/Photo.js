import React from "react";

function Photo(props) {
    return <div>
        <h1>These books are from the API</h1>
        {props.photo.map((photo) => {
            return <div key={photo.id}>
                        <h2>{photo.title}</h2>
                    </div>
        })}
    </div>
}

export default Photo;