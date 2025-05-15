import React from 'react';
import { Container } from 'react-bootstrap';

const BigDots = () => (
    <Container className="text-center mt-2 mb-2">
        <svg width="100" height="30" viewBox="0 0 120 30" fill="currentColor">
            <circle cx="15" cy="15" r="10" />
            <circle cx="60" cy="15" r="10" />
            <circle cx="105" cy="15" r="10" />
        </svg>
    </Container>
);

export default BigDots;