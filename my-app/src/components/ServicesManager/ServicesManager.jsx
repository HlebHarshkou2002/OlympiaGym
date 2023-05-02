import React, { createRef } from "react";
import s from "./ServicesManager.module.css";
import Preloader from "../common/Preloader/Preloader";
import ServiceManager from "./ServiceManager/ServiceManager";
import { servicesAPI } from "../../api/servicesAPI";

const ServicesManager = (props) => {
  let servicesElements = props.servicesData.map((s) => (
    <ServiceManager
      id={s.id}
      name={s.name}
      price={s.price}
      category={s.categoryEntity}
      equipment={s.equipmentEntity}
      followed={s.followed}
      followService={props.followService}
      unFollowService={props.unFollowService}
    />
  ));

  console.log(props)

  let serviceName = React.createRef();
  let servicePrice = React.createRef();
  let categoryId = React.createRef();


  let addService = () => {
    serviceName = serviceName.current.value;
    servicePrice = servicePrice.current.value;
    categoryId = categoryId.current.value;

    servicesAPI.addNewService(serviceName, servicePrice, categoryId)
    .then((response) =>{
      if(response.status === 200) {
        console.log(response)
        props.setNewService(response.data);
      //  window.location.reload();
      }
    })

  }

  return (
    <div className={s.services__wrapper}>
      <div>
        <h1>Управление услугами</h1>
        {servicesElements}
      </div>

      <div className={s.services__manager}>
        <div className={s.services__manager__buttons}>
          <div className={s.services__add}>
            <button onClick={addService}>+</button>
          </div>
        </div>

        <div className={s.edit__fields}>
          <div>
            <p>Введите наименование услуги</p>
            <input type="text" ref={serviceName}/>
          </div>
          <div>
            <p>Введите цену услуги</p>
            <input type="text" ref={servicePrice}/>
          </div>
          <div>
            <p>Введите айди категории услуги</p>
            <input type="text" ref={categoryId}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesManager;
