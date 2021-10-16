import axios from "axios";

// axios.defaults.withCredentials = true;

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const res = await axios.post("https://sgsapi.herokuapp.com/login", loginPayload, {withCredentials: true});
    if (res) {
      dispatch({ type: "LOGIN_SUCCESS", payload: res });
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      return res;
    }

    dispatch({ type: "LOGIN_ERROR", error: res.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  axios.get("https://sgsapi.herokuapp.com/logout");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
