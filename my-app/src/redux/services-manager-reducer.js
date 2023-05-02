const SET_SERVICES = "SET-SERVICES";
const SET_NEW_SERVICE = "SET_NEW_SERVICE";

let initialState = {
  services: [],
};

const servicesManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        services: action.services,
      };
    case SET_NEW_SERVICE:
      return {
        ...state,
        services: [...state.services, action.service]
      };
    default:
      return state;
  }
};

export const setServices = (services) => ({ type: SET_SERVICES, services });
export const setNewService = (service) => ({ type: SET_NEW_SERVICE, service });

export default servicesManagerReducer;
