import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWindow, changeCurrency, changeTrigger, changeAmount, editAlert, resetCurrentAlert } from '../../Actions';

const EditAlert = () => {
    const alert = useSelector(state => state.currentAlert);
    const cryptoInfos = useSelector(state => state.crypto);
    const dispatch = useDispatch();

    return (
        <div className="windowContainer">
            <form>
                <h1>Edit your Alert n°{alert.id}</h1>
                <div>
                    <p>Choose your Cryptocurrency:</p>
                    <select value={alert.currency} onChange={elt => dispatch(changeCurrency(elt.target.value))}>
                        { cryptoInfos.map((crypto, id)=> (
                            <option key={id} value={crypto.asset_id}>{crypto.asset_id}</option>
                        ))}
                    </select>
                    Current Price: {Math.round(cryptoInfos.find(crypto => crypto.asset_id === alert.currency).price_usd * 1000) / 1000}
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
                    type="submit"
                    onClick={() => {
                        dispatch(editAlert(alert));
                        dispatch(resetCurrentAlert());
                        dispatch(removeWindow());
                    }}
                >
                    Edit!
                </button>
            </form>
        </div>
    )
}

export default EditAlert;