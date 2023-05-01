import React from "react";
import s from "./Service.module.css";
import ServiceImage from "../../../assets/images/services/service.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";
import { loginAPI } from "../../../api/loginAPI";
import { servicesAPI } from "../../../api/servicesAPI";

const Service = (props) => {
  // console.log("Что у нас в ПРОПСАХ: ", props);

  const makeOrder = () => {
    loginAPI.getInformationAboutUser().then((response) => {
      let userId = response.data.id;
      let serviceId = props.id;

      console.log("Информация об айди сервиса: ", serviceId);
      console.log("Информация об айди клиента: ", userId);

      servicesAPI.makeServiceOrder(serviceId, userId).then((response) => {
        if (props.followed) {
          props.unFollowService(serviceId);
        } else {
          props.followService(serviceId);
        }
        console.log("Наш ответ после оформления заказа", response);
      });
    });
  };

  return (
    <div className={s.item}>
      <div className={s.service__info}>
        <div className={s.main__info}>
          <div>
            <h1>{props.name}</h1>
          </div>
          <div>
            <p>{props.price} $</p>
          </div>
        </div>
        <div className={s.service__image}>
          <img src={ServiceImage} alt="Service image" />
        </div>
        <div className={s.category__info}>
          <p>Описание: {props.category.description}</p>
          <p className={s.category__name}>
            Категория: <span>{props.category.name}</span>
          </p>
          {props.followed ? (
            <button
              className={s.unfollow__button}
              style={{ backgroundColor: props.followed ? "#222222" : "#DB3522" }}
            >
              Отписаться
            </button>
          ) : (
            <button
              onClick={makeOrder}
              style={{ backgroundColor: props.followed ?  "#222222" : "#DB3522" }}
            >
              Записаться
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
