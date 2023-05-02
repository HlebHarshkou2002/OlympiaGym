import React from "react";
import s from "./ServiceManager.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { loginAPI } from "../../../api/loginAPI";
import { servicesAPI } from "../../../api/servicesAPI";

const ServiceManager = (props) => {
  // console.log("Что у нас в ПРОПСАХ: ", props);

  return (
    <div>
      <div className={s.item}>
        <div className={s.service__info}>
          <div className={s.main__info}>
            <p>{props.id}:</p>
            <p>{props.name}</p>
            <p>{props.price} $</p>
          </div>
        </div>
        
        <div className={s.services__delete}>
            <button>-</button>
          </div>
      </div>
    </div>
  );
};

export default ServiceManager;