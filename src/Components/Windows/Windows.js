import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IntroFirst from './IntroFirst';
import IntroSecond from './IntroSecond';
import CreateAlert from './CreateAlert';
import EditAlert from './EditAlert';
import { setCurrentAlert } from '../../Actions';

const Windows = () => {
    const currentWindow = useSelector(state => state.window);
    const alerts = useSelector(state => state.alert);
    const dispatch = useDispatch();

    var window = null;
    if (currentWindow.introFirst)
        window = <IntroFirst />

    else if (currentWindow.introSecond)
        window = <IntroSecond />

    else if (currentWindow.create)
        window = <CreateAlert />;

    else if (currentWindow.edit) {
        dispatch(setCurrentAlert(alerts.find(elt => elt.id === currentWindow.id)));
        window = <EditAlert id={currentWindow.id}/>;
    }

    else
        window = null;

    return window;
}

export default Windows;