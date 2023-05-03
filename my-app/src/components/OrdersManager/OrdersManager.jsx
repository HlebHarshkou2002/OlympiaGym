import React, { createRef } from "react";
import s from "./OrdersManager.module.css";
import Preloader from "../common/Preloader/Preloader";
import OrderManager from "./OrderManager/OrderManager";
import { servicesAPI } from "../../api/servicesAPI";

const OrdersManager = (props) => {

  let ordersElements = props.ordersData.map((s) => (
    <OrderManager serviceName={s.serviceEntity.name} servicePrice={s.serviceEntity.price}
        orderTime={s.orderTime} userName={s.userEntity.email} userStatus={s.userEntity.status}
        totalProfit={props.totalProfit}
    />
  ));


  return (
    <div className={s.services__wrapper}>
      <div>
        <h1>Все продажи</h1>
        {ordersElements}
      </div>
    </div>
  );
};

export default OrdersManager;
