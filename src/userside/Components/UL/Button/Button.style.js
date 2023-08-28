import Styled, { styled } from 'styled-components'

export const BaseButton = Styled.button`
    margin-left: 25px;
   
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;

   

`;

export const PrimaryButton = styled(BaseButton)`
    // background: ${props => props.disabled = true ? 'grey' : '#FF6337'};
    color: #fff;
    background: red;

     &:hover {
         background:  ${props => props.disabled = true ? 'black' : '#blue'};
     }
`;


export const SecondaryButton = styled(BaseButton)`
    background: red;
    color: #fff;

     &:hover {
         background: black;
     }
`;


export const OutlineButton = styled(BaseButton)`
    background: red;
    color: #fff;
    border: 2px solid black;

     &:hover {
         background: black;
     }
`;
