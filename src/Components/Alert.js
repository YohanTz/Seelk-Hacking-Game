import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goCreateWindow } from '../Actions';
import AlertTable from './AlertTable';

const AlertList = () => {
    const currentWindow = useSelector(state => state.window)
    const dispatch = useDispatch();

    if (Object.values(currentWindow).some(val => val !== false))
        return null;

    return (
        <div>
            <h2>My crypto alerts: </h2>
            <div>
                <AlertTable />
                <button onClick={() => dispatch(goCreateWindow())}>Create new alert</button>
            </div>
        </div>
    )
}

export default AlertList;