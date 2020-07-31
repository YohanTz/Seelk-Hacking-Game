import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWindow } from '../../Actions';
import MailInput from '../MailInput';

const IntroSecond = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.mail);

    return (
        <div className="windowContainer">
            <form>
                <h1>Enter your email!</h1>
                <p>We need your email to send you the crypto alerts!</p>
                <MailInput />
                { email.valid
                    ? null
                    : <p>Enter a valid email!</p> }
                <button
                    onClick={() => {
                        if (email.valid)
                            dispatch(removeWindow());
                    }}
                >   
                    Start!
                </button>
            </form>
        </div>
    )
}

export default IntroSecond;