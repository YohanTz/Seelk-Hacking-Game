const cryptoReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_INFOS':
            return action.payload;

        default:
            return state;
    }
}

export default cryptoReducer;