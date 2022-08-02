import Obstacles from "./Obstacles";
import Player from "./Player";
import Road from "./Road";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="game-field">
        <Player />
        <Road />
        <Obstacles />
      </div>
    </div>
  );
}
