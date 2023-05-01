const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_ROLE = "SET_USER_ROLE";

let initialState = {
  id: null,
  email: null,
  password: null,
  login: null,
  isAuth: false,
  isFetching: false,
  userRole: "User",
};

const loginReducer = (state = initialState, action) => {
  //   console.log("Auth action: ", action);
  // console.log("Login state: ", state);
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_USER_ROLE:
      return {
        ...state,
        userRole: action.userRole,
      };
    // case TOGGLE_IS_FETCHING:
    //   return {
    //     ...state,
    //     isFetching: action.isFetching,
    //   };
    default:
      return state;
  }
};

export const setUserData = (email, login, password) => ({
  type: SET_USER_DATA,
  data: { email, login, password },
});

export const setUserRole = (userRole) => ({
  type: SET_USER_ROLE,
  userRole
})

// export const toggleIsFetching = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching
// })

export default loginReducer;
