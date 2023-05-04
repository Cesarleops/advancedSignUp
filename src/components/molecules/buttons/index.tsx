import { useContext } from "react";
import { PaginationContext } from "../../../context/PaginationContext";
import "./buttons.scss";
export const Buttons = () => {
  const { pagesState, nextPage, prevPage, setFinished } =
    useContext(PaginationContext);
  const stepsVerification = () => {
    if (pagesState.currentIndex === 1 && pagesState.suscription.price === 0) {
      return true;
    } else {
      return false;
    }
  };
  return !pagesState.finished ? (
    <div className="buttons">
      {pagesState.currentIndex !== 3 ? (
        <button
          className="buttons--right"
          disabled={stepsVerification()}
          onClick={() => nextPage()}
        >
          Next Step
        </button>
      ) : (
        <button
          className="buttons--right confirm"
          onClick={() => setFinished()}
        >
          Confirm
        </button>
      )}
      {pagesState.currentIndex > 0 && (
        <button className="buttons--left" onClick={() => prevPage()}>
          Go back
        </button>
      )}
    </div>
  ) : (
    <div></div>
  );
};
