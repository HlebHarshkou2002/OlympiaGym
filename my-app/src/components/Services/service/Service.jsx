import React from "react";
import s from "./Service.module.css";
import ServiceImage from "../../../assets/images/services/service.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";

const Service = (props) => {
  // console.log("Наши пропсы: ", props);

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
          <p className={s.category__name}>Категория: <span>{props.category.name}</span></p>
          <button>Записаться</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
