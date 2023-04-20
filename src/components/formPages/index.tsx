import React, { Dispatch, SetStateAction, useContext } from "react";
import { PaginationContext } from "../../context/PaginationContext";

const FormPages = () => {
  const { nextPage, prevPage, pagesState } = useContext(PaginationContext);
  return (
    <div>
      {pagesState.currentIndex === 0 && <p>Hola 1</p>}
      {pagesState.currentIndex === 1 && <p>Hola 2</p>}
      {pagesState.currentIndex === 2 && <p>Hola 3</p>}
      {pagesState.currentIndex === 3 && <p>Hola 4</p>}
      <button onClick={() => nextPage()}>Next</button>
      {pagesState.currentIndex > 0 && (
        <button onClick={() => prevPage()}>Go back</button>
      )}
    </div>
  );
};

export default FormPages;
