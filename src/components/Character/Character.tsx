import React, { FC } from "react";

import { RiCopperCoinFill, RiTodoFill } from "react-icons/ri";
import { FaGem } from "react-icons/fa";

import { CharacterInfo } from "../../models/models";
import CharacterIMG from "../../assets/images/character.png";

import "./Character.scss";

interface CharacterProps {
  characterInfo: CharacterInfo;
}

const Character: FC<CharacterProps> = ({ characterInfo }) => {
  const { gold, gems, questsDone } = characterInfo;
  return (
    <div className="character">
      <img src={CharacterIMG} alt="character" className="character__img" />
      <div className="character__info">
        <div className="character__info-item character__info-item--gold">
          {
            <RiCopperCoinFill
              className="character__info-icon"
              style={{ color: "gold" }}
            />
          }
          Золото: {gold}
        </div>
        <div className="character__info-item character__info-item--gems">
          {
            <FaGem
              className="character__info-icon"
              style={{ color: "deepskyblue" }}
            />
          }
          Кристаллы: {gems}
        </div>
        <div className="character__info-item character__info-item--todos">
          {
            <RiTodoFill
              className="character__info-icon"
              style={{ color: "tomato" }}
            />
          }
          Задания: {questsDone}
        </div>
      </div>
    </div>
  );
};

export default Character;
