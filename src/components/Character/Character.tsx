import React from "react";

import CharacterIMG from "../../assets/images/character.png";

import "./Character.scss";

const Character = () => {
  return (
    <div className="character">
      <img src={CharacterIMG} alt="character" className="character__img" />
      <div className="character__info">
        <div className="character__info-gold">Золото: 0</div>
        <div className="character__info-gems">Кристаллы: 0</div>
        <div className="character__info-todos">Сделанные задания: 1</div>
      </div>
    </div>
  );
};

export default Character;
