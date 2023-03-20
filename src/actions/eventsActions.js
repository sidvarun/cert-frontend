import axios from 'axios';
import { useSelector } from 'react-redux';

// action types
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';

// action creators
export const fetchEventsRequest = () => {
  return {
    type: FETCH_EVENTS_REQUEST,
  };
};

export const fetchEventsSuccess = (events) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: events,
  };
};

export const fetchEventsFailure = (error) => {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error,
  };
};

export const fetchEvents = (token) => {

  return async (dispatch) => {
    dispatch(fetchEventsRequest());
    try {
      const response = await axios.get('http://localhost:8081/api/v1/events/', {
        headers: { Authorization: `Bearer ${token}` }
      });
    //   console.log(response.data.events);
      const events = response.data.events;
      dispatch(fetchEventsSuccess(events));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchEventsFailure(errorMessage));
    }
  };
};

export const registerForEvent = (eventId, token) => async dispatch => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/v1/events/register/${eventId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      localStorage.setItem(`event_${eventId}`, true);

      dispatch(registerSuccess(eventId));


    } catch (error) {
      console.log(error);
    }
  };
  
  export const registerSuccess = eventId => {
    return {
      type: REGISTER_SUCCESS,
      payload: eventId
    };
  };

  export const updateSuccess = eventId => {
    return {
      type: UPDATE_EVENT_SUCCESS,
      payload: eventId
    };
  };

/***********************ADMIN Create Event Actions*******************************************/
  export const createEventRequest = () => ({
    type: CREATE_EVENT_REQUEST,
  });
  
  export const createEventSuccess = (event) => ({
    type: CREATE_EVENT_SUCCESS,
    payload: event,
  });
  
  export const createEventFailure = (error) => ({
    type: CREATE_EVENT_FAILURE,
    payload: error,
  });
  
  // Thunk action creator
  export const createEvent = (eventData) => {
    console.log(eventData);
    return async (dispatch) => {
      dispatch(createEventRequest());
  
      try {
        const { data } = await axios.post('http://localhost:8081/api/v1/events/', eventData);
  
        dispatch(createEventSuccess(data));
      } catch (error) {
        dispatch(createEventFailure(error.message));
      }
    };
  };

  // Update event
  export const updateEvent = (eventId) => async (dispatch) => {
      try {
        const response = await axios.post(
          `http://localhost:8081/api/v1/users/admins/update/${eventId}`
        );

        dispatch(updateSuccess(eventId));


      } catch (error) {
        console.log(error);
      }
  };