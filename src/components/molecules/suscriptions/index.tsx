import { Dispatch, SetStateAction, useContext, useState } from "react";
import { PaginationContext } from "../../../context/PaginationContext";
import "./suscriptions.scss";
import Icon from "../../../assets/icon-advanced.svg";
import ArcadeIcon from "../../../assets/icon-arcade.svg";
import ProIcon from "../../../assets/icon-pro.svg";
interface Props {
  title: string;
  price: number;
  duration: string;
  iconName: string;
  setSelected: Dispatch<
    SetStateAction<{ arcade: boolean; advanced: boolean; pro: boolean }>
  >;
  selected: Boolean;
}

const Suscriptions = ({
  title,
  price,
  duration,
  iconName,
  selected,
  setSelected,
}: Props) => {
  const { pagesState } = useContext(PaginationContext);
  const selection = () => {
    if (iconName === "arcade") {
      setSelected({
        arcade: true,
        pro: false,
        advanced: false,
      });
    }
    if (iconName === "advanced") {
      setSelected({
        arcade: false,
        pro: false,
        advanced: true,
      });
    }
    if (iconName === "pro") {
      setSelected({
        arcade: false,
        pro: true,
        advanced: false,
      });
    }
  };
  return (
    <div
      onClick={() => selection()}
      className={`suscriptionCard ${selected ? "active" : ""}`}
    >
      <div>
        {iconName === "arcade" && <img src={ArcadeIcon} alt="adad" />}
        {iconName === "advanced" && <img src={Icon} alt="adad" />}
        {iconName === "pro" && <img src={ProIcon} alt="adad" />}
      </div>
      <div>
        <h3 className="suscriptionCard--title">{title}</h3>
        <p className="suscriptionCard--price">{price}</p>
        {!pagesState.isMonthly && (
          <p className="suscriptionCard--duration">{duration}</p>
        )}
      </div>
    </div>
  );
};

export default Suscriptions;
