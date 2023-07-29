import React from "react";

function Scoreboard(props) {

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
        <div className="scoreboard">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                    {props.users.map((user, key) => {
                        return (
                            <tr key={key}>
                                <td>{user.name}</td>
                                <td>{modTime(user.timeRecord)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Scoreboard;