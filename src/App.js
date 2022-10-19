import ToppingMenu from "./ToppingMenu";
import { useState } from "react";

const App = () => {
  const [toppings] = useState(ToppingMenu());
  const [toppingsMenu, setToppingsMenu] = useState(toppings.getMenu());

  return (
    <main>
      <div>
        <h2>Toppings</h2>
        <ul>
          {toppingsMenu.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
