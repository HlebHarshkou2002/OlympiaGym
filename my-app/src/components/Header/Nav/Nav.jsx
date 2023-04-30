import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Мой профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}` }>
                <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Задать вопрос</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/Main" className = { navData => navData.isActive ? s.active : s.item }>Главная</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/Services" className = { navData => navData.isActive ? s.active : s.item }>Наши услуги</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/Users" className = { navData => navData.isActive ? s.active : s.item }>Найти друзей</NavLink>
            </div>
            <div className={s.item}>
                <a>Вопросы и ответы</a>
            </div>
        </nav>
    );
}

export default Nav;