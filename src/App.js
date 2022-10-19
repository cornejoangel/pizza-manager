import ToppingMenu from "./ToppingMenu";
import { useState } from "react";

const App = () => {
  const [toppings] = useState(ToppingMenu());
  const [toppingsMenu, setToppingsMenu] = useState(toppings.getMenu());
  const [topping, setTopping] = useState('');

  const addTopping = (e, newTopping) => {
    e.preventDefault();
    toppings.addTopping(newTopping);
    setToppingsMenu(toppings.getMenu());
    setTopping('');
  };

  const toppingChange = (e) => {
    setTopping(e.target.value);
  };

  return (
    <main>
      <div>
        <h2>Toppings</h2>
        <ul>
          {toppingsMenu.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <form onSubmit={(e) => addTopping(e, topping)}>
          <label htmlFor="topping">Add New Topping</label>
          <input type="text" name="topping" value={topping} onChange={toppingChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    </main>
  );
}

export default App;
