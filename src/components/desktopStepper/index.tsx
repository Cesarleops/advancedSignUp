import { useContext } from "react";
import { PaginationContext } from "../../context/PaginationContext";
import { StepItem } from "../atoms/stepItem";
import "./desktopStepper.scss";

const DesktopStepper = () => {
  const { pagesState } = useContext(PaginationContext);
  const { currentIndex } = pagesState;

  return (
    <div className="desktopStepper">
      <StepItem
        step="1"
        text="YOUR INFO"
        active={currentIndex === 0 ? true : false}
      />
      <StepItem
        step="2"
        text="SELECT PLAN"
        active={currentIndex === 1 ? true : false}
      />
      <StepItem
        step="3"
        text="ADD-ONS"
        active={currentIndex === 2 ? true : false}
      />
      <StepItem
        step="4"
        text="SUMMARY"
        active={currentIndex === 3 ? true : false}
      />
    </div>
  );
};

export default DesktopStepper;
