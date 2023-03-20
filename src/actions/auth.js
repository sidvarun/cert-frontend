import axios from 'axios';

export const login = (email, password, callback) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:8081/api/v1/users/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    callback({success : true});
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({ type: 'LOGIN_FAILED', payload: err.response.data.message });
    callback({success : false, error : err.response.data.message});
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
