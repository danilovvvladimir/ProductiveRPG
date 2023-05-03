import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterInfo } from "../../models/models";

interface IStateCharacterInfo {
  characterInfo: CharacterInfo;
}

const initialStateCharacterInfo: IStateCharacterInfo = {
  characterInfo: {
    gems: 0,
    gold: 0,
    questsDone: 0,
  },
};

export const characterInfoSlice = createSlice({
  name: "characterInfo",
  initialState: initialStateCharacterInfo,
  reducers: {
    clearCharacterInfoAction: (state) => {
      state.characterInfo = initialStateCharacterInfo.characterInfo;
    },
    setCharacterInfoAction: (state, action: PayloadAction<CharacterInfo>) => {
      state.characterInfo = action.payload;
    },
  },
});

export const { clearCharacterInfoAction, setCharacterInfoAction } =
  characterInfoSlice.actions;
export default characterInfoSlice.reducer;
