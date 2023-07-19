import React from 'react';
import { BaseHeading, H2, HeadingH1, HeadingH2, HeadingH3, HeadingH4, HeadingH5, HeadingH6, HeadingP, Headingh2 } from './Heading.style';

function Heading({ children, type }) {

    const HandleHeading = () => {
        switch (type) {
            case 'h1':
                return HeadingH1;
            case 'h2':
                return HeadingH2;
            case 'h3':
                return HeadingH3;
            case 'h4':
                return HeadingH4;
            case 'h5':
                return HeadingH5;
            case 'h6':
                return HeadingH6;
            case 'p':
                return HeadingP;
           
        }
    }

    const Headingcheck = HandleHeading()

    return (
        <>
            <Headingcheck >
                {children}
            </Headingcheck>
        </>
    );
}

export default Heading;