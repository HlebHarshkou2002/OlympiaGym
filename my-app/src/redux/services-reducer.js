const SET_SERVICES = "SET-SERVICES";
const FOLLOW_SERVICE = "FOLLOW_SERVICE";
const UNFOLLOW_SERVICE = "UNFOLLOW_SERVICE";

let initialState = {
  services: [
    //     {
    //         "id": 1,
    //         "name": "TRX",
    //         "price": 100.0,
    //         "categoryEntity": {
    //             "id": 1,
    //             "name": "fitness",
    //             "description": "This category of fitness",
    //             "serviceEntities": [
    //                 1
    //             ]
    //         },
    //         "equipmentEntity": [
    //             {
    //                 "id": 1,
    //                 "service": 1,
    //                 "equipment": {
    //                     "id": 1,
    //                     "name": "shtanga",
    //                     "description": "this a description of equipment",
    //                     "serviceEntities": [
    //                         1
    //                     ]
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //       "id": 1,
    //       "name": "TRX",
    //       "price": 100.0,
    //       "categoryEntity": {
    //           "id": 1,
    //           "name": "fitness",
    //           "description": "This category of fitness",
    //           "serviceEntities": [
    //               1
    //           ]
    //       },
    //       "equipmentEntity": [
    //           {
    //               "id": 1,
    //               "service": 1,
    //               "equipment": {
    //                   "id": 1,
    //                   "name": "shtanga",
    //                   "description": "this a description of equipment",
    //                   "serviceEntities": [
    //                       1
    //                   ]
    //               }
    //           }
    //       ]
    //   },
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
