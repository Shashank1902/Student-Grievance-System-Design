// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         isFetching: true,
//         error: false,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         isFetching: false,
//         error: false,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: null,
//         isFetching: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default AuthReducer;

//import React, { useReducer } from "react";
 
let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user_id
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
        userDetails: action.payload.data.user.rows[0],
        token: action.payload.data.user.rows[0].user_id,
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