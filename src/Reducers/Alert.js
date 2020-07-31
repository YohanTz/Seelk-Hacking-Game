const alertReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ALERT':
            action.payload.id = state.length + 1;
            return [...state, Object.assign({}, action.payload)];
        case 'DELETE_ALERT':
            return state.filter(alert => alert.id !== action.payload);
        case 'EDIT_ALERT':
            return state.map(alert => {
                return (alert.id === action.payload.id)
                ? action.payload
                : alert;
            });
        default:
            return state;
    }
}

export default alertReducer;