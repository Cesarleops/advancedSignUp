import React, { Dispatch, SetStateAction, useContext } from "react";
import { PaginationContext } from "../../context/PaginationContext";
import "./formPages.scss";
import FirstScreen from "../../screens/firstScreen";
import SecondScreen from "../../screens/secondScreen";
import ThirdScreen from "../../screens/thirdScreen";
import FourthScreen from "../../screens/fourthScreen";
import { Buttons } from "../molecules/buttons";
const FormPages = () => {
  const { pagesState } = useContext(PaginationContext);
  return (
    <div className="screensContainer">
      {pagesState.currentIndex === 0 && <FirstScreen />}
      {pagesState.currentIndex === 1 && <SecondScreen />}
      {pagesState.currentIndex === 2 && <ThirdScreen />}
      {pagesState.currentIndex === 3 && <FourthScreen />}
      <Buttons />
    </div>
  );
};

export default FormPages;
