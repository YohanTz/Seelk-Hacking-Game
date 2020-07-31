import alertReducer from './Alert';
import mailReducer from './Mail';
import windowReducer from './WindowDisplayed';
import currentAlertReducer from './CurrentAlert';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentAlert: currentAlertReducer,
    alert: alertReducer,
    mail: mailReducer,
    window: windowReducer
});

export default rootReducer;