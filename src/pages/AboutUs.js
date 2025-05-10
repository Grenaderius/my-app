import React from 'react';
import './AboutUs.css';
import { useLocation } from 'react-router-dom';


const AboutUs = () => {
    const location = useLocation();
    const { name, city, age, image } = location.state || {};

    if(!name) return <p>Користувача не вибрано!</p>

    return (
        <div className="container user-details" style={{ color: 'black' }}>
            <h2>Вітаємо {name}!</h2>
            <img src={image} alt={name} />
            <p>Вік: {age}</p>
            <p>Місто: {city}</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
    );
};

export default AboutUs;