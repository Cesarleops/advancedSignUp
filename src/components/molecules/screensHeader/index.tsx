import "./screenHeader.scss";
interface Props {
  title: string;
  text: string;
}

const ScreensHeader = ({ title, text }: Props) => {
  return (
    <div className="screenHeader">
      <h2 className="screenHeader--title">{title}</h2>
      <p className="screenHeader--text">{text}</p>
    </div>
  );
};

export default ScreensHeader;
