import ToppingMenu from "./ToppingMenu";
import { useState } from "react";

const App = () => {
  const [toppings] = useState(ToppingMenu());
  const [toppingsMenu, setToppingsMenu] = useState(toppings.getMenu());
  const [topping, setTopping] = useState('');
  const [updatingTopping, setUpdatingTopping] = useState(false);

  const addTopping = (e, newTopping) => {
    e.preventDefault();
    toppings.addTopping(newTopping);
    setToppingsMenu(toppings.getMenu());
    setTopping('');
  };

  const toppingChange = (e) => {
    setTopping(e.target.value);
  };

  const removeTopping = (oldTopping) => {
    toppings.removeTopping(oldTopping);
    setToppingsMenu(toppings.getMenu());
    setUpdatingTopping(false);
  };

  const selectTopping = (oldTopping) => {
    setUpdatingTopping(oldTopping);
  };

  const updateTopping = (e, newTopping) => {
    e.preventDefault();
    toppings.updateTopping(updatingTopping, newTopping);
    setToppingsMenu(toppings.getMenu());
    setTopping('');
    setUpdatingTopping(false);
  }

  const cancelUpdate = () => {
    setUpdatingTopping(false);
  }

  return (
    <main>
      <div>
        <h2>Toppings</h2>
        <ul>
          {toppingsMenu.map((t) => (
            <li key={t}>
              {t}
              <button type="button" onClick={() => removeTopping(t)}>Delete</button>
              {updatingTopping && t === updatingTopping && (
                <button type="button" onClick={() => cancelUpdate()}>Cancel Update</button>
              )}
              {!updatingTopping && (
                <button type="button" onClick={() => selectTopping(t)}>Update</button>
              )}
            </li>
          ))}
        </ul>
        {updatingTopping === false && (
          <form onSubmit={(e) => addTopping(e, topping)}>
            <label htmlFor="topping">Add New Topping</label>
            <input type="text" name="topping" value={topping} onChange={toppingChange} />
            <button type="submit">Add</button>
          </form>
        )}
        {updatingTopping && (
          <form onSubmit={(e) => updateTopping(e, topping)}>
            <label htmlFor="topping">Update Topping</label>
            <input type="text" name="topping" value={topping} onChange={toppingChange} />
            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default App;
