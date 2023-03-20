// reducers/eventReducer.js

import {
    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAILURE,
  } from '../actions/eventsActions';
  
  const initialState = {
    event: null,
    loading: false,
    error: null,
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_EVENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CREATE_EVENT_SUCCESS:
        return {
          ...state,
          event: action.payload,
          loading: false,
          error: null,
        };
      case CREATE_EVENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  