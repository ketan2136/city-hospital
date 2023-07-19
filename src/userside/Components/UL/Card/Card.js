import React from 'react';
import { BaseCard } from './Card.style';

function Card({ children }) {
    return (
        <BaseCard>
            {children}
        </BaseCard>
    );
}

export default Card;