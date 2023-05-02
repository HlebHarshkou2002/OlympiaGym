import React from "react";
import { connect } from "react-redux";
import { setOrders, followService, unFollowService } from "../../redux/user-orders-reducer";
import Orders from "./Orders";
import { loginAPI } from "../../api/loginAPI";
import { ordersAPI } from "../../api/ordersAPI";


class OrdersAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.ordersData.length === 0) {
      loginAPI.getInformationAboutUser().then((response) => {
        let userId = response.data.id;
        ordersAPI.getOrders(userId).then((response) => {
          this.props.setOrders(response.data)

          console.log("RESPOOOONSE!!! ", response)
        })
        .catch((error) => {
          console.log(error)
        })
      })
    }
  }

  render() {
    return (
      <Orders
        unFollowService={this.props.unFollowService}
        followService={this.props.followService}
        ordersData={this.props.ordersData}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ordersData: state.userOrdersPage.orders,
  };
};

const OrdersContainer = connect(mapStateToProps, {
  setOrders,
  unFollowService
})(OrdersAPIContainer);

export default OrdersContainer;
