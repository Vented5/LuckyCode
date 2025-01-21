import { useState } from "react";
import "./App.css";
import { AnimatedBg } from "./AnimatedBg";
import toothlessDancing from "./assets/toothless-dancing.gif";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatedBg>
        <h1>Lucky Code {"<X"}</h1>
        <p>
          Welcome tho the Anhedonia field! :D. where all my slavery comes true.
        </p>
        <img className="flex m-auto mt-10" src={toothlessDancing} alt="" />

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        <h2>Heeeey weeeenas! que tal le va?</h2>
        <p>Click on the Vite and React logos to learn more</p>
      </AnimatedBg>
    </>
  );
}

export default App;
