import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./Menu.scss";

type ActiveProps = {
  isActive: boolean;
};

const setActive = ({ isActive }: ActiveProps): string =>
  isActive ? "menu__link menu__link-active" : "menu__link";

const Menu: FC = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <NavLink to="/" className="logo__link">
          <div className="logo__img">Productive RPG</div>
        </NavLink>
      </div>
      <ul className="menu__items">
        <li className="menu__item">
          <NavLink to="/" className={setActive}>
            Задачи
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/character" className={setActive}>
            Персонаж
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/shop" className={setActive}>
            Магазин
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/about" className={setActive}>
            Про нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
