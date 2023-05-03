import { FC } from "react";

import { RiCopperCoinFill, RiTodoFill } from "react-icons/ri";
import { FaGem } from "react-icons/fa";

import CharacterIMG from "../../assets/images/character.png";

import "./Character.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { clearCharacterInfoAction } from "../../store/slices/characterSlice";

const Character: FC = () => {
  const characterInfo = useSelector(
    (state: RootState) => state.characterInfo.characterInfo
  );
  const { gold, gems, questsDone } = characterInfo;
  const dispatch = useDispatch();

  const clearCharacterInfo = () => {
    dispatch(clearCharacterInfoAction());
  };

  return (
    <div className="character">
      <img src={CharacterIMG} alt="character" className="character__img" />
      <div className="character__info">
        <div className="character__info-item character__info-item--gold">
          {
            <RiCopperCoinFill
              className="character__info-icon"
              style={{ color: "#ffab10" }}
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
      <button className="character__btn-clear" onClick={clearCharacterInfo}>
        Clear Info
      </button>
    </div>
  );
};

export default Character;
