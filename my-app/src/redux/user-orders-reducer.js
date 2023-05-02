const SET_ORDERS = "SET_ORDERS";
const FOLLOW_SERVICE = "FOLLOW_SERVICE";
const UNFOLLOW_SERVICE = "UNFOLLOW_SERVICE";

let initialState = {
  orders: [],
};

const userOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case UNFOLLOW_SERVICE:
      return {
        ...state,
        orders: state.orders.map((s) => {
          if (s.id === action.serviceId) {
            return { ...s, followed: false };
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

export const setOrders = (orders) => ({ type: SET_ORDERS, orders });
export const unFollowService = (serviceId) => ({
  type: UNFOLLOW_SERVICE,
  serviceId,
});
export const followService = (serviceId) => ({
  type: FOLLOW_SERVICE,
  serviceId,
});

export default userOrdersReducer;
