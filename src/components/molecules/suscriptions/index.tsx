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
  const { pagesState, setSuscription } = useContext(PaginationContext);
  const selection = () => {
    if (iconName === "arcade") {
      setSelected({
        arcade: true,
        pro: false,
        advanced: false,
      });
      setSuscription({ name: "Arcade", price: price });
    }
    if (iconName === "advanced") {
      setSelected({
        arcade: false,
        pro: false,
        advanced: true,
      });
      setSuscription({ name: "Advanced", price: price });
    }
    if (iconName === "pro") {
      setSelected({
        arcade: false,
        pro: true,
        advanced: false,
      });
      setSuscription({ name: "Pro", price: price });
    }
  };
  return (
    <div
      onClick={() => selection()}
      className={`suscriptionCard ${selected ? "active" : ""} ${
        pagesState.isMonthly ? "monthly" : ""
      }`}
    >
      <div>
        {iconName === "arcade" && <img src={ArcadeIcon} alt="adad" />}
        {iconName === "advanced" && <img src={Icon} alt="adad" />}
        {iconName === "pro" && <img src={ProIcon} alt="adad" />}
      </div>
      <div>
        <h3 className="suscriptionCard--title">{title}</h3>
        <p className="suscriptionCard--price">
          ${pagesState.isMonthly ? price : price * 10}/
          {pagesState.isMonthly ? "mo" : "yr"}
        </p>
        {!pagesState.isMonthly && (
          <p className="suscriptionCard--duration">{duration}</p>
        )}
      </div>
    </div>
  );
};

export default Suscriptions;
