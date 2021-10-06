import axios from "axios";

axios.defaults.withCredentials = true;

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8000/login",
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

export const loginCheck = async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.get(
      "http://localhost:8000/login"
    );
    if(res.data.loggedIn === true) dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: "LOGIN_START"});
  }
};

