import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWindow, changeCurrency, changeTrigger, changeAmount, addAlert, resetCurrentAlert } from '../../Actions';

const IntroFirst = () => {
    const alert = useSelector(state => state.currentAlert);
    const dispatch = useDispatch();
    return (
        <div className="windowContainer">
            <div>
                <h1>Create a new Alert</h1>
                <div>
                    <p>Choose your Cryptocurrency:</p>
                    <select onChange={elt => dispatch(changeCurrency(elt.target.value))}>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="ZCH">ZCH</option>
                        <option value="EOS">EOS</option>
                    </select>
                    Current Price: 9000$
                </div>
                <p>Alert me when</p>
                <div className="conditionContainer">
                    BTC
                    <select onChange={elt => dispatch(changeTrigger(elt.target.value))}>
                        <option value="<">Falls Under</option>
                        <option value=">">Is Above</option>
                    </select>
                    <input
                        onChange={elt=> dispatch(changeAmount(elt.target.value))}
                        type="number"
                    >
                    </input> $
                </div>
                <button
                    onClick={() => {
                        dispatch(addAlert(alert));
                        dispatch(resetCurrentAlert());
                        dispatch(removeWindow());
                    }}
                >
                    Create!
                </button>
            </div>
        </div>
    )
}

export default IntroFirst;