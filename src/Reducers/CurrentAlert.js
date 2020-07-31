let DEFAULT_STATE = {currency: '', trigger: '<', amount: 0}

const currentAlertReducer = (state = Object.assign({}, DEFAULT_STATE), action) => {
    switch (action.type) {
        case 'CHANGE_CURRENCY':
            state.currency = action.payload;
            return state;
        case 'CHANGE_TRIGGER':
            state.trigger = action.payload;
            return state;
        case 'CHANGE_AMOUNT':
            state.amount = action.payload;
            return state;
        case 'RESET':
            return Object.assign({}, DEFAULT_STATE);
        default:
            return state;
    }
}

export default currentAlertReducer;