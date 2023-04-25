import { BsCheckLg } from "react-icons/bs";
import "./checkboxComponent.scss";
import { Dispatch, SetStateAction, useContext } from "react";
import { PaginationContext } from "../../../context/PaginationContext";

interface Props {
  onClick: (title: string, price: number) => void;
  title: string;
  text: string;
  price: number;
  checked: boolean;
}
const CheckboxComponent = ({ title, text, price, checked, onClick }: Props) => {
  const { pagesState } = useContext(PaginationContext);

  return (
    <div
      onClick={() => onClick(title, price)}
      className={`checkboxContainer ${checked ? "active" : ""}`}
    >
      <div className={`checkboxContainer--icon ${checked ? "active" : ""}`}>
        {checked && <BsCheckLg />}
      </div>
      <div>
        <h3 className="checkboxContainer--title">{title}</h3>
        <p className="checkboxContainer--text">{text}</p>
      </div>
      <p className="checkboxContainer--price">
        ${pagesState.isMonthly ? price : price * 10}/
        {pagesState.isMonthly ? "mo" : "yr"}
      </p>
    </div>
  );
};

export default CheckboxComponent;
