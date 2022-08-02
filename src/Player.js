import { useEffect, useState } from "react";

function Player() {
  const [jump, setJump] = useState(false);

  function playerJump() {
    setJump(true);
    setTimeout(() => {
      setJump(false);
    }, 1000);
  }
  useEffect(() => {
    document.addEventListener("keydown", function () {
      playerJump();
    });
  }, []);

  return (
    <button
      className="player"
      style={{ top: jump ? 200 : 250 }}
      onClick={playerJump}
    ></button>
  );
}
export default Player;
