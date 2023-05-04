import ThanksIcon from "../../assets/icon-thank-you.svg";
import "./finishingModal.scss";
export const FinishingModal = () => {
  return (
    <div className="finishingModal">
      <img src={ThanksIcon} alt="smh" />
      <h4>Thank You!</h4>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};
