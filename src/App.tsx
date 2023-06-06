import React from "react";
import Banner from "./components/banner/index";
import Character from "./components/cards/index";
import "./styles.css";
import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <Banner />
      <Character />
    </>
  );
};

export default App;
