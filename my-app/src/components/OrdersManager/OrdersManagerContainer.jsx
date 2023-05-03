import React from "react";
import { connect } from "react-redux";
import { servicesAPI } from "../../api/servicesAPI";
import { setOrders, setTotalProfit} from "../../redux/orders-manager-reducer";
import OrdersManager from "./OrdersManager";
import { ordersAPI } from "../../api/ordersAPI";

class OrdersManagerAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.ordersData.length === 0) {
        ordersAPI.getAllOrders().then((response) => {
            let totalProfit = 0;
            this.props.setOrders(response.data);
            console.log(response.data)
            for(let el of response.data) {
              totalProfit += el.serviceEntity.price;
            }
            this.props.setTotalProfit(totalProfit)
        }).catch((error) => {
            console.log(error);
        })
    }
  }

  render() {
    return (
      <OrdersManager
        ordersData={this.props.ordersData}
        totalProfit={this.props.totalProfit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ordersData: state.ordersManagerPage.orders,
    totalProfit: state.ordersManagerPage.totalProfit,
  };
};

const OrdersManagerContainer = connect(mapStateToProps, {
  setOrders,
  setTotalProfit
})(OrdersManagerAPIContainer);

export default OrdersManagerContainer;
