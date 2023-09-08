import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1
        setTeam(newTeam);
    }
    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);

    }
    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '35px',
        borderRadius: '15px',
    }

    const ButtonStyle = {
        margin: '20px'
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button style={ButtonStyle} onClick={handleAdd}>Add Team</button>
            <button onClick={handleRemove}>Remove Team</button>
        </div>
    )
}