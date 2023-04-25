import "./button.scss";

interface Props {
  shape: string;
  text: string;
  onClick: () => void;
}

const Button = ({ text, shape, onClick }: Props) => {
  return (
    <button className={`button ${shape}`} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;
