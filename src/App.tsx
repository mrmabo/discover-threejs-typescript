import { useState } from "react";
import World from "./World/World";

function App() {
  const [showWorld, setShowWorld] = useState(true);
  const handleClick = () => {
    setShowWorld(true);
  };
  return (
    <div>
      {!showWorld && (
        <button onClick={handleClick}>Render World Component</button>
      )}
      {showWorld && <World />}
    </div>
  );
}

export default App;
