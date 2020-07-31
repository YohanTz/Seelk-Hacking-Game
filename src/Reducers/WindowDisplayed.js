let DEFAULT_STATE = {introFirst: true, introSecond: false, create: false, edit: false}

const windowReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'INTRO_SECOND_WINDOW':
            return {introFirst: false, introSecond: true, create: false, edit: false};
        case 'CREATE_WINDOW':
            return {introFirst: false, introSecond: false, create: true, edit: false};
        case 'EDIT_WINDOW':
            return {introFirst: false, introSecond: false, create: false, edit: true, id: action.payload};
        case 'NO_WINDOW':
            return {introFirst: false, introSecond: false, create: false, edit: false};
        default:
            return state;
    }
}

export default windowReducer;