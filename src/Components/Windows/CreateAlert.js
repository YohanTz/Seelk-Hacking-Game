import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWindow, changeCurrency, changeTrigger, changeAmount, addAlert, resetCurrentAlert } from '../../Actions';

const CreateAlert = () => {
    const alert = useSelector(state => state.currentAlert);
    const cryptoInfos = useSelector(state => state.crypto);
    const dispatch = useDispatch();
    
    return (
        <div className="windowContainer">
            <form>
                <h1>Create a new Alert</h1>
                <div>
                    <p>Choose your Cryptocurrency:</p>
                    <select onChange={elt => dispatch(changeCurrency(elt.target.value))}>
                        {cryptoInfos.map((crypto, id) => (
                            <option
                                key={id}
                                value={crypto.asset_id}
                            >
                                {crypto.asset_id}
                            </option>
                        ))}
                    </select>
                    Current Price:
                    {
                        alert.currency === ''
                        ? null
                        : Math.round(cryptoInfos.find(crypto =>
                            crypto.asset_id === alert.currency).price_usd * 1000) / 1000
                    } $
                </div>
                <div className="conditionContainer">
                    <p>Alert me when</p>
                    {alert.currency}
                    <select onChange={elt => dispatch(changeTrigger(elt.target.value))}>
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
                        dispatch(addAlert(alert));
                        dispatch(resetCurrentAlert());
                        dispatch(removeWindow());
                    }}
                >
                    Create!
                </button>
            </form>
        </div>
    )
}

export default CreateAlert;