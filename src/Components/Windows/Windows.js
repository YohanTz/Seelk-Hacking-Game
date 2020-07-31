import React from 'react';
import { useSelector } from 'react-redux';
import IntroFirst from './IntroFirst';
import IntroSecond from './IntroSecond';
import CreateAlert from './CreateAlert';

const Windows = () => {
    const currentWindow = useSelector(state => state.window);

    var window = null;
    if (currentWindow.introFirst)
        window = <IntroFirst />

    else if (currentWindow.introSecond)
        window = <IntroSecond />

    else if (currentWindow.create)
        window = <CreateAlert />;

    else
        window = null;

    // else if (currentWindow)
        // window = <EditAlert id={currentWindow.edit.id}/>;

    return window;
}

export default Windows;