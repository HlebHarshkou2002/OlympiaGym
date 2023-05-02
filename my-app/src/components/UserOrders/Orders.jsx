import React from "react";
import s from "./Orders.module.css";
import Order from "./order/Order";

const Orders = (props) => {
  let ordersElements = props.ordersData.map((s) => (
    <Order id={s.id} name={s.serviceEntity.name} price={s.serviceEntity.price} category={s.serviceEntity.categoryEntity.name} 
            orderTime={s.orderTime}
            followed={s.followed} followService={props.followService} 
            unFollowService={props.unFollowService}/>
  ));

  return (
    <div className={s.services__wrapper}>
      <h1>Мои заказы</h1>

      <div className={s.services__elements}>{ordersElements}</div>
    </div>
  );
};

export default Orders;
