import ScreensHeader from "../../components/molecules/screensHeader";
import "./fourthScreen.scss";

const FourthScreen = () => {
  return (
    <div className="fourthScreenContainer">
      <ScreensHeader
        title="Finishing Up"
        text="Double-check everything looks OK before confirming"
      />
    </div>
  );
};

export default FourthScreen;
