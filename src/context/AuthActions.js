// export const LoginStart = (userCredentials) => ({
//     type: "LOGIN_START",
// });

// export const LoginSuccess = (user) => ({
//     type: "LOGIN_SUCCESS",
//     payload: user,
// });

// export const LoginFailure = (error) => ({
//     type: "LOGIN_FAILURE",
//     payload: error,
// });
import axios from "axios";

axios.defaults.withCredentials = true;


// const ROOT_URL = 'http://localhost:8000';
 
export async function loginUser(dispatch, loginPayload) {

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(loginPayload),
//   };
 
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const res = await axios.post(
        "http://localhost:8000/login",
        loginPayload
      );
    // let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    // let data = await respons.json();
    //console.log(res);
 
    if (res) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: res });
      localStorage.setItem('currentUser', JSON.stringify(res.data.user.rows[0]));
      return res
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: res.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
 
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}