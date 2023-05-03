import React from "react";
import s from "./OrderManager.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";


const OrderManager = (props) => {
  console.log(props)

  return (
    <div>
      <div className={s.item}>
        <div className={s.service__info}>
          <div className={s.main__info}>
            <p>{props.serviceName}</p>
            <p>{props.userName}</p>
            <p>{props.servicePrice} $</p>
            <p>{props.userStatus}</p>
            <p>{props.orderTime}</p>
          </div>
        </div>

        <div className={s.totalProfit}>
            Общая прибыль: {props.totalProfit} $
        </div>
        
      </div>
    </div>
  );
};

export default OrderManager;
