import React from 'react';
import { BaseInput, InputError } from './Input.style';
import Auth1 from '../../../Containar/Auth1';

function Input({ erroetext, ...res }) {

    return (

        <>
            <BaseInput  className="form-control" erroetext={erroetext} {...res} />

            <InputError erroetext={erroetext}>
                {erroetext}
            </InputError>
        </>
    );
}

export default Input;