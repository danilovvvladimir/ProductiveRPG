import React, { FC } from "react";

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
        <div className="character__info-gold">Золото: {gold}</div>
        <div className="character__info-gems">Кристаллы: {gems}</div>
        <div className="character__info-todos">
          Сделанные задания: {questsDone}
        </div>
      </div>
    </div>
  );
};

export default Character;
