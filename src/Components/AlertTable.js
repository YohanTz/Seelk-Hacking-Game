import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAlert, goEditWindow } from '../Actions';
import Trash from './Icons/Trash';
import Pencil from './Icons/Pencil';

const AlertTable = () => {
    const alerts = useSelector(state => state.alert);
    const dispatch = useDispatch();
    return (
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
                            <td>TODO:</td>
                            <td>{`${alert.trigger} ${alert.amount} $`}</td>
                            <td>
                                <Trash onClick={() => dispatch(deleteAlert(alert.id))} />
                                <Pencil onClick={() => dispatch(goEditWindow(alert.id))} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default AlertTable;