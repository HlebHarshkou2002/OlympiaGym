const SET_SERVICES = "SET-SERVICES";


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
        users: action.services,
      };
    default:
      return state;
  }
};

export const setServices = (services) => ({ type: SET_SERVICES, services });

export default servicesReducer;
