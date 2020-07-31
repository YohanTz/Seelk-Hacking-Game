import isValidEmail from '../Scripts/isValidEmail';

const mailReducer = (state = {mail: '', valid: false}, action) => {
    switch (action.type) {
        case 'SET':
            return { mail: action.payload, valid: isValidEmail(action.payload) }

        default:
            return state;
    }
}

export default mailReducer;