import { combineReducers } from 'redux';
import todo from './todo';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({ visibilityFilter, todo });

export default todoApp;
