import {
    UPLOAD_ATTENDEES_REQUEST,
    UPLOAD_ATTENDEES_SUCCESS,
    UPLOAD_ATTENDEES_FAIL,
  } from "../actions/attendeeActions";
  
  export const attendeeReducer = (state = {}, action) => {
    switch (action.type) {
      case UPLOAD_ATTENDEES_REQUEST:
        return { loading: true };
      case UPLOAD_ATTENDEES_SUCCESS:
        return { loading: false, success: true, attendees: action.payload };
      case UPLOAD_ATTENDEES_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  