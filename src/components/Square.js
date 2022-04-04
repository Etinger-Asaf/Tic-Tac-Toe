import "../style.css";

const Square = (props) => {
  return (
    <button className="squareStyle" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
