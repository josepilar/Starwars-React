import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
import Test from './test.reducer';

export default combineReducers(Immutable({
    Test
}));