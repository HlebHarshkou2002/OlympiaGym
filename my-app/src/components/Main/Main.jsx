import React from "react";
import s from "./Main.module.css";
import { NavLink } from "react-router-dom";

const Main = (props) => {
  return (
    <div className={s.content}>
      <div className={s.content__wrapper}>
        <div className={s.text__wrapper}>
          <div className={s.main__title__wrapper}>
            <p>
              Путь к <span>твоему</span> идеальному телу
            </p>
          </div>

          <div className={s.button__wrapper}>
            <NavLink to="/Services" className={s.button}>Выбрать уровень</NavLink>
          </div>
        </div>

        <div className={s.image__block__wrapper}>
          <div className={s.main__image__wrapper}>
            <div className={s.main__image}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
