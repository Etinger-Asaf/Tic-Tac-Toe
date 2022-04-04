import Square from "./Square";
import "../style.css";
const Board = ({ squares, onClick }) => {
  return (
    <div className="boardStyle">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
