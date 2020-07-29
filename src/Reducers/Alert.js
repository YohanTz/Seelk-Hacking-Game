const alertReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return []; // TODO
        case 'DELETE':
            return []; // TODO
        case 'EDIT':
            return []; // TODO
        default:
            return state;
    }
}

export default alertReducer;