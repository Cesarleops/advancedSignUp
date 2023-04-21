import React, { Dispatch, SetStateAction, useContext } from "react";
import { PaginationContext } from "../../context/PaginationContext";
import "./formPages.scss";
import FirstScreen from "../../screens/firstScreen";
import SecondScreen from "../../screens/secondScreen";
import ThirdScreen from "../../screens/thirdScreen";
import FourthScreen from "../../screens/fourthScreen";
const FormPages = () => {
  const { nextPage, prevPage, pagesState } = useContext(PaginationContext);
  return (
    <div className="screensContainer">
      {pagesState.currentIndex === 0 && <FirstScreen />}
      {pagesState.currentIndex === 1 && <SecondScreen />}
      {pagesState.currentIndex === 2 && <ThirdScreen />}
      {pagesState.currentIndex === 3 && <FourthScreen />}
      <div className="screensContainer--buttons">
        <button onClick={() => nextPage()}>Next</button>
        {pagesState.currentIndex > 0 && (
          <button onClick={() => prevPage()}>Go back</button>
        )}
      </div>
    </div>
  );
};

export default FormPages;
