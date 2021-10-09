let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload.data.user,
        token: action.payload.data.token,
        loading: false,
        loggedin: true
      };
    case "LOGOUT":
      return {
        ...initialState,
        userDetails: "",
        token: "",
        loggedOut: true
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};