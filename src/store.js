import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import eventsReducer from './reducers/eventsReducer';
import certificateReducer from './reducers/certReducer';
import { attendeeReducer } from './reducers/attendeeReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  events : eventsReducer,
  certificates : certificateReducer,
  attendee: attendeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
