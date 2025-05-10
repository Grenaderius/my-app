import React from "react";
import "./UserCard.css";
import { useNavigate } from 'react-router-dom';


function UserCard({ name, age, city, image}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about', {
            state: { name, age, city, image }

        });

        //alert(`Hello, ${name}!`);
    };

    return (
        <div className="user-card">
            <img src={image} alt={name} width="100" height="120" />
            <h2>{name}</h2>
            <p>Вік: {age}</p>
            <p>Місто: {city}</p>
            <button onClick={handleClick}>Показати</button>
        </div>
    );
}

export default UserCard;