const SET_SERVICES = "SET-SERVICES";
const FOLLOW_SERVICE = "FOLLOW_SERVICE";
const UNFOLLOW_SERVICE = "UNFOLLOW_SERVICE";

let initialState = {
  services: [
  ],
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        services: action.services,
      };
    case FOLLOW_SERVICE:
      return {
        ...state,
        services: state.services.map((s) => {
          if (s.id === action.serviceId) {
            return { ...s, followed: true };
          }
          return s;
        }),
      };
    case UNFOLLOW_SERVICE:
      return {
        ...state,
        services: state.services.map((s) => {
          if (s.id === action.serviceId) {
            return { ...s, followed: false };
          }
          return s;
        }),
      };
    default:
      return state;
  }
};

export const setServices = (services) => ({ type: SET_SERVICES, services });
export const followService = (serviceId) => ({
  type: FOLLOW_SERVICE,
  serviceId,
});
export const unFollowService = (serviceId) => ({
  type: UNFOLLOW_SERVICE,
  serviceId,
});

export default servicesReducer;
