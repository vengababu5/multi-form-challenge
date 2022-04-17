import { combineReducers } from 'redux';


import redcuer from './redcuers/reducer';

const rootReducer = combineReducers({
    multiStepForm: redcuer,

});
export default rootReducer;