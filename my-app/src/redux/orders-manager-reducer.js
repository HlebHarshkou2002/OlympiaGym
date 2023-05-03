const SET_ORDERS = "SET-ORDERS";
const SET_TOTAL_PROFIT = "SET_TOTAL_PROFIT";

let initialState = {
  orders: [],
  totalProfit: 0,
};

const ordersManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case SET_TOTAL_PROFIT:
      return {
        ...state,
        totalProfit: action.totalProfit,
      };
    default:
      return state;
  }
};

export const setOrders = (orders) => ({ type: SET_ORDERS, orders });
export const setTotalProfit = (totalProfit) => ({
  type: SET_TOTAL_PROFIT,
  totalProfit,
});

export default ordersManagerReducer;
