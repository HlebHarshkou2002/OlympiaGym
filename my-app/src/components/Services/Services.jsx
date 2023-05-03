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
  let rangePrice = React.createRef();

  let searchServiceByName = () => {
    searchServiceText = searchServiceText.current.value;
    rangePrice = rangePrice.current.value;
    console.log(searchServiceText.toUpperCase())
    console.log(rangePrice)
    let searchElementsArray = [];
    console.log(props)
    for(let el of props.servicesData) {
      console.log(el)
      if(searchServiceText.toUpperCase() === el.name.toUpperCase()) {
        searchElementsArray.push(el)
        console.log("СОВПАДАЮЩИЙ ЭЛЕМЕНТ", el)
      }
      if(el.price < rangePrice) {
        searchElementsArray.push(el)
      }
    }
    console.log("НАШ МАССИВ НАЙДЕННЫХ ЭЛЕМЕНТОВ: ",searchElementsArray)
    props.setServices(searchElementsArray);
  }

  let reloadPage = () => {
    window.location.reload();
  }

  let selectRange = (event) => {
    console.log(event.target.value)
  }

  return (
      <div>
      {localStorage.getItem("isAuth") ? (
        <div className={s.services__wrapper}>
                <h1>Наши услуги</h1>
                <input type="search" placeholder="Введите название услуги" ref={searchServiceText} className={s.search__input}/>
                <input type="number" placeholder="Введите ценовой диапазон" ref={rangePrice} className={s.search__input}/>
                <button onClick={searchServiceByName} className={s.search__button}>Найти</button>
                <button onClick={reloadPage} className={s.reset__search}>Сбросить поиск</button>

                <div className={s.services__elements}>{servicesElements}</div>
                </div>
      ) : (
          <h1>Вы не авторизованы</h1>
      )}      
      </div>

  );
};

export default Services;
