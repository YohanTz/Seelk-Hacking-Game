import alertReducer from './Alert';
import mailReducer from './Mail';
import windowReducer from './WindowDisplayed';
import currentAlertReducer from './CurrentAlert';
import cryptoReducer from './Crypto';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentAlert: currentAlertReducer,
    alert: alertReducer,
    mail: mailReducer,
    window: windowReducer,
    crypto: cryptoReducer
});

export default rootReducer;