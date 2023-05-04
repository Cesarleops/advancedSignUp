import "./stepItem.scss";
interface Props {
  text: string;
  step: string;
  active?: boolean;
}
export const StepItem = ({ text, step, active }: Props) => {
  return (
    <div className="stepItem">
      <p className={`stepItem--number ${active ? "active" : ""}`}>{step}</p>
      <div className="stepItem--info">
        <p className="stepItem--info__step">STEP {step}</p>
        <p className="stepItem--info__text">{text}</p>
      </div>
    </div>
  );
};
