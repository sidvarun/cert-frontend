import {
    DOWNLOAD_CERTIFICATE_REQUEST,
    DOWNLOAD_CERTIFICATE_SUCCESS,
    DOWNLOAD_CERTIFICATE_FAILURE
  } from '../actions/certActions';
  
  const initialState = {
    isLoading: false,
    error: null
  };
  
  const certificateReducer = (state = initialState, action) => {
    switch (action.type) {
      case DOWNLOAD_CERTIFICATE_REQUEST:
        return { ...state, isLoading: true, error: null };
      case DOWNLOAD_CERTIFICATE_SUCCESS:
        return { ...state, isLoading: false };
      case DOWNLOAD_CERTIFICATE_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default certificateReducer;
  