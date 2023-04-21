import ScreensHeader from "../../components/molecules/screensHeader";
import "./secondScreen.scss";

const SecondScreen = () => {
  return (
    <div className="secondScreenContainer">
      <ScreensHeader
        title="Select your plan"
        text="You have the option of monthly or yearly billing"
      />
    </div>
  );
};

export default SecondScreen;
