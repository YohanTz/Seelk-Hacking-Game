import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAlert, goEditWindow } from '../Actions';
import Trash from './Icons/Trash';
import Pencil from './Icons/Pencil';
import sendAlerts from '../Scripts/sendAlerts'

const AlertTable = () => {
    const alerts = useSelector(state => state.alert);
    const cryptos = useSelector(state => state.crypto);
    const mail = useSelector(state => state.mail);
    const dispatch = useDispatch();

    useEffect(() => {
        sendAlerts(alerts, cryptos, mail.mail, dispatch, deleteAlert);
        const interval = setInterval(() => {
            sendAlerts(alerts, cryptos, mail.mail);
        }, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="alertTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cryptocurrency</th>
                        <th>Current value</th>
                        <th>Alert When</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.length === 0 ? <tr><td>No alerts for the moment</td></tr> : null}
                    {
                        alerts.map(alert => (
                            <tr key={alert.id}>
                                <td>{alert.id}</td>
                                <td>{alert.currency}</td>
                                <td>{Math.round(cryptos
                                    .find(elt => elt.asset_id === alert.currency).price_usd * 1000) / 1000 + ' $'}</td>
                                <td>{`${alert.trigger} ${alert.amount === '' ? 0 : alert.amount} $`}</td>
                                <td>
                                    <Trash onClick={() => dispatch(deleteAlert(alert.id))} />
                                    <Pencil onClick={() => dispatch(goEditWindow(alert.id))} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AlertTable;