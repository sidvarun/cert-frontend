import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:8081/api/v1/users/students/student-login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILED', payload: err.response.data });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
