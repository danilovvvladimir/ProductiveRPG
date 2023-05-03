import React, { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./components/Layout/Layout";

import "./App.scss";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setCharacterInfoAction } from "./store/slices/characterSlice";
import { CharacterInfo } from "./models/models";

const App: FC = () => {
  console.log("APP rendered");
  const characterInfo = useSelector(
    (state: RootState) => state.characterInfo.characterInfo
  );
  const dispatch = useDispatch();

  const setCharacterInfo = (localStorageCharacterInfo: CharacterInfo) => {
    dispatch(setCharacterInfoAction(localStorageCharacterInfo));
  };

  // Initial LocalStorage Checking [
  useEffect(() => {
    if (localStorage.getItem("info") !== null) {
      setCharacterInfo(JSON.parse(localStorage.getItem("info") as string));
    }
  }, []);
  // Initial LocalStorage Checking ]

  // LocalStorage Update [
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(characterInfo));
  }, [characterInfo]);

  // LocalStorage Update ]

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
