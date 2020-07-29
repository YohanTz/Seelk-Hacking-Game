const introReducer = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_MAIL':
            return true;
        case 'FINISH':
            return false;
        default:
            return state;
    }
}

export default introReducer;