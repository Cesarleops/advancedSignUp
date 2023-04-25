import { useContext, useState } from "react";
import CheckboxComponent from "../../components/molecules/checkboxComponent";
import ScreensHeader from "../../components/molecules/screensHeader";
import "./thirdScreen.scss";
import { PaginationContext } from "../../context/PaginationContext";

const ThirdScreen = () => {
  const { setAddOns, pagesState, removeAdd } = useContext(PaginationContext);

  const onClick = (title: string, price: number) => {
    if (title === "Online service") {
      if (pagesState.addOns.find((add) => add.name === title)) {
        removeAdd(title);
        return;
      }
      setAddOns({ name: title, price });
    }
    if (title === "Larger Storage") {
      if (pagesState.addOns.find((add) => add.name === title)) {
        removeAdd(title);
        return;
      }
      setAddOns({ name: title, price });
    }
    if (title === "Customizable profile") {
      if (pagesState.addOns.find((add) => add.name === title)) {
        removeAdd(title);
        return;
      }
      setAddOns({ name: title, price });
    }
  };

  console.log(pagesState.addOns);
  return (
    <div className="thirdScreenContainer">
      <ScreensHeader
        title="Pick add-ons"
        text="Add-ons help enhance you gaming experience"
      />
      <CheckboxComponent
        onClick={onClick}
        checked={
          pagesState.addOns.filter((e) => e.name === "Online service").length >=
          1
        }
        title="Online service"
        text="Access to multiplayer games"
        price={1}
      />
      <CheckboxComponent
        onClick={onClick}
        checked={
          pagesState.addOns.filter((e) => e.name === "Larger Storage").length >=
          1
        }
        title="Larger Storage"
        text="Extra 1TB of cloud save"
        price={2}
      />
      <CheckboxComponent
        onClick={onClick}
        checked={
          pagesState.addOns.filter((e) => e.name === "Customizable profile")
            .length >= 1
        }
        title="Customizable profile"
        text="Custom theme on your profile"
        price={2}
      />
    </div>
  );
};

export default ThirdScreen;
