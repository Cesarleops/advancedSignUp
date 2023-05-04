import { useContext } from "react";
import ScreensHeader from "../../components/molecules/screensHeader";
import "./fourthScreen.scss";
import { PaginationContext } from "../../context/PaginationContext";
import { FinishingModal } from "../../components/finishingModal";

const FourthScreen = () => {
  const { pagesState, setIndex } = useContext(PaginationContext);

  return (
    <div className="fourthScreenContainer">
      {pagesState.finished ? <FinishingModal /> : ""}
      <ScreensHeader
        title="Finishing Up"
        text="Double-check everything looks OK before confirming"
      />
      <div className="fourthScreenContainer--prices">
        <h5 className="fourthScreenContainer--prices__title">
          {pagesState.suscription.name} (
          {pagesState.isMonthly ? "Monthly" : "Yearly"})
          <span>
            ${pagesState.suscription.price}/{pagesState.isMonthly ? "mo" : "yr"}
          </span>
        </h5>
        <button
          onClick={() => setIndex()}
          className="fourthScreenContainer--prices__button"
        >
          Change
        </button>
        {pagesState.addOns.length > 0 ? (
          pagesState.addOns.map((add) => (
            <p className="fourthScreenContainer--prices__text" key={add.name}>
              {add.name}
              <span>
                +${pagesState.isMonthly ? add.price : add.price * 10}/
                {pagesState.isMonthly ? "mo" : "yr"}
              </span>
            </p>
          ))
        ) : (
          <p className="fourthScreenContainer--prices__text">No additions</p>
        )}
      </div>
      <p className="fourthScreenContainer--total">
        Total (per year)
        <span>
          $
          {pagesState.addOns.length > 0
            ? pagesState.addOns
                .map((e) => (pagesState.isMonthly ? e.price : e.price * 10))
                .reduce((a, b) => a + b) + pagesState.suscription.price
            : pagesState.suscription.price}
          /{pagesState.isMonthly ? "mo" : "yr"}
        </span>
      </p>
    </div>
  );
};

export default FourthScreen;
