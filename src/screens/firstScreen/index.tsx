import ScreensHeader from "../../components/molecules/screensHeader";
import "./firstScreen.scss";
const FirstScreen = () => {
  return (
    <div className="firstScreenContainer">
      <ScreensHeader
        title="Personal info"
        text="Please provide your name,email address and phone humber"
      />

      <form className="firstScreenContainer--form">
        <div className="firstScreenContainer--input">
          <label>Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>

        <div className="firstScreenContainer--input">
          <label>Email Address</label>
          <input type="email" placeholder="e.g. stephenking@lorem.com" />
        </div>

        <div className="firstScreenContainer--input">
          <label>Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
    </div>
  );
};

export default FirstScreen;
