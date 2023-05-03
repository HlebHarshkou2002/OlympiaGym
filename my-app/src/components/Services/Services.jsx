import React from "react";
import s from "./Services.module.css";
import Service from "./service/Service";
import Preloader from "../common/Preloader/Preloader";

const Services = (props) => {
  let servicesElements = props.servicesData.map((s) => (
    <Service id={s.id} name={s.name} price={s.price} category={s.categoryEntity} 
    equipment={s.equipmentEntity} followed={s.followed} followService={props.followService} 
    unFollowService={props.unFollowService}/>
  ));

  let searchServiceText = React.createRef();

  let searchServiceByName = () => {
    searchServiceText = searchServiceText.current.value;
    console.log(searchServiceText)
    let searchElementsArray = [];
    for(let el of props.servicesData) {
      console.log(el)
      if(searchServiceText === el.name) {
        searchElementsArray.push(el)
        console.log("СОВПАДАЮЩИЙ ЭЛЕМЕНТ", el)
      }
      if(searchServiceText === ""){
        window.location.reload();
      }
    }
    console.log("НАШ МАССИВ НАЙДЕННЫХ ЭЛЕМЕНТОВ: ",searchElementsArray)
    props.setServices(searchElementsArray);
  }

  return (
    <div className={s.services__wrapper}>
      <h1>Наши услуги</h1>

      <input type="text" placeholder="Введите название услуги" ref={searchServiceText} className={s.search__input}/>
      <button onClick={searchServiceByName} className={s.search__button}>Найти</button>

      <div className={s.services__elements}>{servicesElements}</div>
    </div>
  );
};

export default Services;
