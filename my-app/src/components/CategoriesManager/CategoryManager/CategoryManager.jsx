import React from "react";
import s from "./CategoryManager.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { loginAPI } from "../../../api/loginAPI";
import { servicesAPI } from "../../../api/servicesAPI";

const CategoryManager = (props) => {
  console.log("Что у нас в ПРОПСАХ: ", props);
//   let deleteService = () => {
//     console.log("Что у нас в ПРОПСАХ: ", props.id);
//     servicesAPI.deleteService(props.id).then((response) => {
//       console.log(response)
//     })
//     .catch((error) => console.log(error));
//   }


  return (
    <div>
      <div className={s.item}>
        <div className={s.service__info}>
          <div className={s.main__info}>
            <p>{props.categoryId}:</p>
            <p>{props.categoryName}</p>
            <p>{props.categoryDescription}</p>
          </div>
        </div>
        
        <div className={s.services__delete}>
          </div>
      </div>
    </div>
  );
};

export default CategoryManager;
