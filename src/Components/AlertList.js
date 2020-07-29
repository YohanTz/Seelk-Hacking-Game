import React from 'react';
import { useSelector } from 'react-redux';

const AlertList = () => {
    if (useSelector(state => state.intro))
        return null;

    return (
        <div>
            <h2>My alerts:</h2>
        </div>
    )
}

export default AlertList;