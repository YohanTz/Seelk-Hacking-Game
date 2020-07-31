import React from 'react';
import { useDispatch } from 'react-redux';
import { setEmail } from '../Actions';

const MailInput = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                onChange={elt => dispatch(setEmail(elt.target.value))}
            >
            </input>
        </div>
    )
}

export default MailInput;