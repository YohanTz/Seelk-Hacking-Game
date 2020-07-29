import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeIntro } from '../Actions';
import MailInput from './MailInput';

const Intro = () => {
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();

    if (!useSelector(state => state.intro))
        return null;

    return (
        <div className="introContainer">
            {
                page === 0
                ? <div>
                    <h1>Welcome!</h1>
                    <p>
                        This Web app has been made to help you set mail alerts to know when
                        the value of your favorite Crypto reach a certain point or move suddenly.
                    </p>
                    <br />
                    <p>
                        Insert instructions here !
                    <br />
                    Insert instructions here !
                    <br />
                    Insert instructions here !
                    <br />
                    </p>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
                : <div>
                    <h1>Enter your email!</h1>
                    <p>We need your email to send you the crypto alerts</p>
                    <MailInput />
                    <button onClick={() => dispatch(removeIntro())}>Start!</button>
                </div>
            }
        </div>
    )
}

export default Intro;