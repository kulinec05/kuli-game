import { useState, useEffect } from "react";

function Obstacles() {
  const [move, setMove] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setMove(!move);
    }, 1000);
  }, []);

  return 
    <div
      className="obstacles"
      style={{ transform:`translateX(${move ? 330 : 0})` , transition: "2s" ,background :move?'red':'blue'}}
    ></div>
  );
}
export default Obstacles;
