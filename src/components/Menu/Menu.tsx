import React, { FC } from "react";
import { FaGem } from "react-icons/fa";
import { RiCopperCoinFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";

import "./Menu.scss";

type ActiveProps = {
  isActive: boolean;
};

const setActive = ({ isActive }: ActiveProps): string =>
  isActive ? "menu__link menu__link--active" : "menu__link";

const Menu: FC = () => {
  const characterInfo = useSelector(
    (state: RootState) => state.characterInfo.characterInfo
  );
  const { gold, gems } = characterInfo;

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
      <div className="menu__character-info">
        <div className="menu__character-info-item menu__character-info-item--gold">
          {
            <RiCopperCoinFill
              className="menu__character-info-icon"
              style={{ color: "#ffab10" }}
            />
          }
          {gold}
        </div>
        <div className="menu__character-info-item menu__character-info--gems">
          {
            <FaGem
              className="menu__character-info-icon"
              style={{ color: "deepskyblue" }}
            />
          }
          {gems}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
