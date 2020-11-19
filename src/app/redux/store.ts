import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import navigatorReducer from '../services/navigator';
import transferReducer from '../services/transfer';

const store = configureStore({
  reducer: combineReducers({
    navigator: navigatorReducer,
    transferOpts: transferReducer
  })
});

store.subscribe(() => console.log(store.getState()));

export default store;
