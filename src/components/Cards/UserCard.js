import React from "react";
import "./UserCard.css";

function UserCard({ name, age, city }) {
    const handleClick = () => {
        alert(`Hello, ${name}!`);
    }

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <button onClick={handleClick}>Show hi</button>
        </div>
    );
}

export default UserCard;