import { styled } from "styled-components";


export const BaseInput = styled.input`
   border: ${props => props.erroetext !== '' ? '1px solid red' : '1px solid grey' };
`;

export const InputError = styled.span`
    display: ${props => props.erroetext !== '' ? 'inline-block' : 'none' };
    color: red;
`