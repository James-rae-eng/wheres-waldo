import React from "react";

function Clock(props) {

    const modTime = (seconds) => {
        // Minutes and seconds
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        let ret = "";

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;

        return ret;
    }

    return (
        <div className="clock">
            <h3>{modTime(props.elapsedTime)}</h3>
        </div>
    )
}

export default Clock;