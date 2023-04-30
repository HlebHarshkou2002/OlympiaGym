const SET_REGISTRATION_DATA = "SET_REGISTRATION_DATA";

let initialState = {  
  id: null,
  email: null,
  password: null,
  isAuth: false,
  isFetching: false,
  ROLE: null,
};

const registrationReducer = (state = initialState, action) => {
  console.log("State: ", state)

  switch (action.type) {
    case SET_REGISTRATION_DATA:

      return {
        ...state,
        ...action.data,
        isAuth: true,
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

export const setRegistrationUserData = (email, password) => ({
  type: SET_REGISTRATION_DATA,
  data: { email, password },
});

// export const toggleIsFetching = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching
// })

export default registrationReducer;
