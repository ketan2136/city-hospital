import React from 'react';
import { BaseButton, OutlineButton, PrimaryButton, SecondaryButton } from './Button.style';

function Buttan({ children,type ,btndisabled=false }) {

    const Buttontype = () => {
        switch (type) {
            case 'primary':
                return PrimaryButton;
            case 'secondary':
                return SecondaryButton;
            case 'outline':
                return OutlineButton;
    
            default:
                return PrimaryButton;
        }
    }
   

    const CostomButton = Buttontype();

    return (
        <CostomButton disabled={btndisabled}>
            {children}
        </CostomButton>
    );
}

export default Buttan;