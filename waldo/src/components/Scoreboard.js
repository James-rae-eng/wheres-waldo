import React from "react";

function Scoreboard(props) {

    //This data will come from the props (which gets it from the api)
    const data = [
        { name: "James", time: "04:23"},
        { name: "Ocean", time: "05:58"},
        { name: "Player3", time: "12:01"},
    ]

    return (
        <div className="scoreboard">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.time}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Scoreboard;