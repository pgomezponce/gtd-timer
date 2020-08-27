
import {combineReducers} from 'redux';
import sprint from './sprintReducer'
import relax from './relaxReducer';

export default combineReducers({
    sprint: sprint,
    relax:relax
});