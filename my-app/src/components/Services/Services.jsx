import React from "react";
import s from "./Services.module.css";
import Service from "./service/Service";
import Preloader from "../common/Preloader/Preloader";

const Services = (props) => {
  let servicesElements = props.servicesData.map((s) => (
    <Service id={s.id} name={s.name} price={s.price} category={s.categoryEntity} equipment={s.equipmentEntity}/>
  ));

  return (
    <div className={s.services__wrapper}>
      <h1>Наши услуги</h1>

      <div>{props.isFetching ? <Preloader /> : servicesElements}</div>
    </div>
  );
};

export default Services;
