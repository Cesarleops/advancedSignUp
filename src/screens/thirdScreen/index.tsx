import CheckboxComponent from "../../components/molecules/checkboxComponent";
import ScreensHeader from "../../components/molecules/screensHeader";
import "./thirdScreen.scss";
const ThirdScreen = () => {
  return (
    <div className="thirdScreenContainer">
      <ScreensHeader
        title="Pick add-ons"
        text="Add-ons help enhance you gaming experience"
      />
      <CheckboxComponent
        title="Online service"
        text="Access to multiplayer games"
        price="1"
      />
      <CheckboxComponent
        title="Larger Storage"
        text="Extra 1TB of cloud save"
        price="2"
      />
      <CheckboxComponent
        title="Customizable profile"
        text="Custom theme on your profile"
        price="2"
      />
    </div>
  );
};

export default ThirdScreen;
