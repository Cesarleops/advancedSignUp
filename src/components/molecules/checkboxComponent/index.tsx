import { GrCheckmark } from "react-icons/gr";
import "./checkboxComponent.scss";
interface Props {
  title: string;
  text: string;
  price: string;
}
const CheckboxComponent = ({ title, text, price }: Props) => {
  return (
    <div className="checkboxContainer">
      <div className="checkboxContainer--icon">
        <GrCheckmark />
      </div>
      <div>
        <h3 className="checkboxContainer--title">{title}</h3>
        <p className="checkboxContainer--text">{text}</p>
      </div>
      <p className="checkboxContainer--price">+${price}/yr</p>
    </div>
  );
};

export default CheckboxComponent;
