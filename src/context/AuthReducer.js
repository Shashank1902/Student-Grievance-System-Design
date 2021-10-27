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
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload.data.user,
        token: action.payload.data.token,
        loading: false,
        loggedin: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
        userDetails: "",
        token: "",
        loggedOut: true,
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

//////// ADMIN REDUCER ///////////

let admin = localStorage.getItem("currentAdmin")
  ? JSON.parse(localStorage.getItem("currentAdmin"))
  : null;

let adminToken = localStorage.getItem("currentAdmin")
  ? JSON.parse(localStorage.getItem("adminToken"))
  : null;

export const adminInitialState = {
  adminDetails: "" || admin,
  adminToken: "" || adminToken,
  loading: false,
  errorMessage: null,
};

export const AdminAuthReducer = (adminInitialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...adminInitialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...adminInitialState,
        adminDetails: action.payload.data.admin,
        adminToken: action.payload.data.adminToken,
        loading: false,
        loggedin: true,
      };
    case "LOGOUT":
      return {
        ...adminInitialState,
        adminDetails: "",
        adminToken: "",
        loggedOut: true,
      };

    case "LOGIN_ERROR":
      return {
        ...adminInitialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
