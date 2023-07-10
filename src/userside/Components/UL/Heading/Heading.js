import React from 'react';
import { Headingh2 } from './Heading.style';

function Heading({ children }) {
    return (
        <>
            <Headingh2 >
                {children}
            </Headingh2>
        </>
    );
}

export default Heading;