import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from '../pages';
import { combineReducers } from 'redux'

const store = configureStore({
  reducer: combineReducers({
    pages: pagesReducer
  })
});

export default store;
