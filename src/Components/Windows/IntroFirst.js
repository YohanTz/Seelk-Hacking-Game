import React from 'react';
import { useDispatch } from 'react-redux';
import { goSecondWindow } from '../../Actions';

const IntroFirst = () => {
    const dispatch = useDispatch();
    return (
        <div className="windowContainer">
            <div>
                <h1>Welcome!</h1>
                <p>
                    This Web app has been made to help you set mail alerts to know when
                    the value of your favorite Crypto reach a certain point or move suddenly.
                </p>
                <br />
                <p>
                    We will chech every minutes if the conditions that you entered has been validated
                    to send you the mail alert.
                </p>
                <button onClick={() => dispatch(goSecondWindow())}>Next</button>
            </div>
        </div>
    )
}

export default IntroFirst;