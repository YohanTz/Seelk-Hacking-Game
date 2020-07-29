const mailReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET':
            return action.payload; // TODO
        default:
            return state;
    }
}

export default mailReducer;