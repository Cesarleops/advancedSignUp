import { useState } from "react";
import ScreensHeader from "../../components/molecules/screensHeader";
import Suscriptions from "../../components/molecules/suscriptions";
import "./secondScreen.scss";
import ToggleSwitch from "../../components/molecules/toggleSwitch";

const SecondScreen = () => {
  const [selected, setSelected] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });

  return (
    <div className="secondScreenContainer">
      <ScreensHeader
        title="Select your plan"
        text="You have the option of monthly or yearly billing"
      />
      <Suscriptions
        selected={selected.arcade ? true : false}
        setSelected={setSelected}
        title="Arcade"
        price={90}
        duration="2 months free"
        iconName="arcade"
      />
      <Suscriptions
        selected={selected.advanced ? true : false}
        setSelected={setSelected}
        title="Advanced"
        price={120}
        duration="2 months free"
        iconName="advanced"
      />
      <Suscriptions
        selected={selected.pro ? true : false}
        setSelected={setSelected}
        title="Pro"
        price={150}
        duration="2 months free"
        iconName="pro"
      />
      <div className="secondScreenContainer--toggle">
        <p>Monthly</p>
        <ToggleSwitch />
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SecondScreen;
