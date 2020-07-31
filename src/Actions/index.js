export const setEmail = (mail) => {
    return {
        type: 'SET_MAIL',
        payload: mail,
    }
}

export const goSecondWindow = () => {
    return {
        type: 'INTRO_SECOND_WINDOW'
    }
}

export const goCreateWindow = () => {
    return {
        type: 'CREATE_WINDOW'
    }
}

export const goEditWindow = id => {
    return {
        type: 'EDIT_WINDOW',
        payload: id
    }
}

export const removeWindow = () => {
    return {
        type: 'NO_WINDOW'
    }
}

export const changeCurrency = currency => {
    return {
        type: 'CHANGE_CURRENCY',
        payload: currency 
    }
}

export const changeTrigger= trigger => {
    return {
        type: 'CHANGE_TRIGGER',
        payload: trigger
    }
}

export const changeAmount = amount => {
    return {
        type: 'CHANGE_AMOUNT',
        payload: amount 
    }
}

export const setCurrentAlert = (alert) => {
    return {
        type: 'SET',
        payload: alert
    }
}

export const resetCurrentAlert = () => {
    return {
        type: 'RESET'
    }
}

export const addAlert = alert => {
    return {
        type: 'ADD_ALERT',
        payload: alert
    }
}

export const editAlert = alert => {
    return {
        type: 'EDIT_ALERT',
        payload: alert
    }
}

export const deleteAlert = id => {
    return {
        type: 'DELETE_ALERT',
        payload: id 
    }
}

export const updateCryptoInfos = infos => {
    return {
        type: 'UPDATE_INFOS',
        payload: infos
    }
}