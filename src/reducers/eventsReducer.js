import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    REGISTER_SUCCESS,
    UPDATE_EVENT_SUCCESS,
  } from '../actions/eventsActions';
  
  const initialState = {
    loading: false,
    events: [],
    error: '',
    isRegistered : false
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EVENTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_EVENTS_SUCCESS:
        return {
          loading: false,
          events: action.payload,
          error: '',
        };
      case FETCH_EVENTS_FAILURE:
        return {
          loading: false,
          events: [],
          error: action.payload,
        };
        case REGISTER_SUCCESS:
            const updatedEvents = state.events.map(event => {
                console.log(event._id);
              if (event._id === action.payload) {
                return {
                  ...event,
                  isRegistered: true
                };
              }
              return event;
            });
            return {
              ...state,
              events: updatedEvents
            };

         case UPDATE_EVENT_SUCCESS:
            const newEvents = state.events.map(event => {
                console.log(event._id);
              if (event._id === action.payload) {
                return {
                  ...event,
                  allowDownload : !event.allowDownload
                };
              }
              return event;
            });
            return {
              ...state,
              events: newEvents
            };

              
      default:
        return state;
    }
  };
  
  export default eventReducer;
  