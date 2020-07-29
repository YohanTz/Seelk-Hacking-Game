import alertReducer from './Alert';
import mailReducer from './Mail';
import introReducer from './IntroDisplayed';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    alert: alertReducer,
    mail: mailReducer,
    intro: introReducer
});

export default rootReducer;