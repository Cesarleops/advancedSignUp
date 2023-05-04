import { useContext, useState } from "react";
import ScreensHeader from "../../components/molecules/screensHeader";
import Suscriptions from "../../components/molecules/suscriptions";
import "./secondScreen.scss";
import ToggleSwitch from "../../components/molecules/toggleSwitch";
import { PaginationContext } from "../../context/PaginationContext";

const SecondScreen = () => {
  const [selected, setSelected] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });
  const { pagesState } = useContext(PaginationContext);

  return (
    <div>
      <div className="secondScreenContainer">
        <ScreensHeader
          title="Select your plan"
          text="You have the option of monthly or yearly billing"
        />
        <div className="secondScreenContainer--cards">
          <Suscriptions
            selected={selected.arcade ? true : false}
            setSelected={setSelected}
            title="Arcade"
            price={9}
            duration="2 months free"
            iconName="arcade"
          />
          <Suscriptions
            selected={selected.advanced ? true : false}
            setSelected={setSelected}
            title="Advanced"
            price={12}
            duration="2 months free"
            iconName="advanced"
          />
          <Suscriptions
            selected={selected.pro ? true : false}
            setSelected={setSelected}
            title="Pro"
            price={15}
            duration="2 months free"
            iconName="pro"
          />
        </div>

        <div className="secondScreenContainer--toggle">
          <p
            className={`secondScreenContainer--toggle__text ${
              pagesState.isMonthly ? "active" : ""
            }`}
          >
            Monthly
          </p>
          <ToggleSwitch />
          <p
            className={`secondScreenContainer--toggle__text ${
              !pagesState.isMonthly ? "active" : ""
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
