import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../carousel-images', false, /\.(png|jpe?g|svg)$/));

const ImageCarousel = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel interval={3000} controls={true} indicators={true}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={image}
                            alt={`Зображення ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
