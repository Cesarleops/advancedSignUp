import { useContext } from "react";
import Background from "../../assets/bg-sidebar-mobile.svg";
import "./mobileStepper.scss";
import { PaginationContext } from "../../context/PaginationContext";

const MobileStepper = () => {
  const { pagesState } = useContext(PaginationContext);
  const { currentIndex } = pagesState;

  return (
    <div className="mobileStepperContainer">
      <img src={Background} alt="sasa" />
      <ul className="mobileSteps">
        <li
          className={`mobileSteps--item ${currentIndex === 0 ? "active" : ""}`}
        >
          1
        </li>
        <li
          className={`mobileSteps--item ${currentIndex === 1 ? "active" : ""}`}
        >
          2
        </li>
        <li
          className={`mobileSteps--item ${currentIndex === 2 ? "active" : ""}`}
        >
          3
        </li>
        <li
          className={`mobileSteps--item ${currentIndex === 3 ? "active" : ""}`}
        >
          4
        </li>
      </ul>
    </div>
  );
};

export default MobileStepper;
