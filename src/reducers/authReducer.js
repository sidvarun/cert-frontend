const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case 'LOGIN_FAILED':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  