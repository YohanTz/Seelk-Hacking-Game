let DEFAULT_STATE = {currency: '', trigger: '<', amount: 0}

const currentAlertReducer = (state = Object.assign({}, DEFAULT_STATE), action) => {
    switch (action.type) {
        case 'CHANGE_CURRENCY':
            return Object.assign({}, state, {
                currency: action.payload
            });
        case 'CHANGE_TRIGGER':
            return Object.assign({}, state, {
                trigger: action.payload
            });
        case 'CHANGE_AMOUNT':
            return Object.assign({}, state, {
                amount: action.payload
            });
        case 'SET':
            return Object.assign({}, action.payload);
        case 'RESET':
            return Object.assign({}, DEFAULT_STATE);
        case 'CHANGE_DEFAULT_CURRENCY':
            DEFAULT_STATE.currency = action.payload;
            return Object.assign({}, DEFAULT_STATE);
            
        default:
            return state;
    }
}

export default currentAlertReducer;