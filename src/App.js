import Game from "./components/Game";
import "./style.css";

function App() {
  return (
    <div className="background">
      <div className="all">
        <h1 className="gameHeader">Tic Tac Toe</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
