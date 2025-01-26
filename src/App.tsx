import { useState } from "react";
import "./App.css";
import { AnimatedBg } from "./AnimatedBg";
import { NavBar } from "./NavBar";
import toothlessDancing from "./assets/toothless-dancing.gif";


function App() {
  const [count, setCount] = useState(0);
  const [dragonsito, setDragonsito] = useState<JSX.Element[]>([]);

  let newDragonsito = <img className="flex m-auto mt-10" src={toothlessDancing} alt="" />

  const addDragonsito = () => {
    setCount((count) => count + 1)
    setDragonsito((prevDragonsito) => [...prevDragonsito, newDragonsito]); 
    console.log(dragonsito.length)
  }
  
  

  return (
    <>
      <NavBar/>
      <AnimatedBg>
        <h1>Lucky Code {"<X"}</h1>
        <p>
          Welcome tho the Anhedonia field! :D. where all my slavery comes true.
        </p>

        <section className="flex">
          { dragonsito.map((dragon) => <>{dragon}</>) }
        </section>
        
        

        <div className="card">
          <button onClick={() => addDragonsito()}>
            count is {count}
          </button>
        </div>

        <h2>Heeeey weeeenas! que tal le va?</h2>
      </AnimatedBg>
    </>
  );
}

export default App;
