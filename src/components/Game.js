import { useState } from "react";
import calculateWinner from "../calculateWinner";
import Board from "./Board";
import "../style.css";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [noPlayerWon, setNoPlayerWon] = useState(false);

  let winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    winner = null;
    setXIsNext(true);
    setNoPlayerWon(false);
  };

  if (!board.includes(null) && !noPlayerWon) {
    setNoPlayerWon(true);
  }

  return (
    <div className="game">
      <Board squares={board} onClick={handleClick} />
      <div>
        <p className="player">
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
      </div>
      <button onClick={resetGame} className="resetBtn">
        Reset Game
      </button>
      {noPlayerWon && <p>No player won! Please reset the game.</p>}
    </div>
  );
};

export default Game;
