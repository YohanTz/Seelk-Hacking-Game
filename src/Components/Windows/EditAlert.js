import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWindow, changeCurrency, changeTrigger, changeAmount, editAlert, resetCurrentAlert } from '../../Actions';

const EditAlert = ({ id }) => {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.currentAlert);

    return (
        <div className="windowContainer">
            <div>
                <h1>Edit your Alert n {id}</h1>
                <div>
                    <p>Choose your Cryptocurrency:</p>
                    <select value={alert.currency} onChange={elt => dispatch(changeCurrency(elt.target.value))}>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="ZCH">ZCH</option>
                        <option value="EOS">EOS</option>
                    </select>
                    Current Price: TODO:
                </div>
                <p>Alert me when</p>
                <div className="conditionContainer">
                    {alert.currency} 
                    <select value={alert.trigger} onChange={elt => dispatch(changeTrigger(elt.target.value))}>
                        <option value="<">Falls Under</option>
                        <option value=">">Is Above</option>
                    </select>
                    <input
                        value={alert.amount}
                        onChange={elt => dispatch(changeAmount(elt.target.value))}
                        type="number"
                    >
                    </input> $
                </div>
                <button
                    onClick={() => {
                        dispatch(editAlert(alert));
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

export default EditAlert;