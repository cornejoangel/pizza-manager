import ToppingMenu from "./ToppingMenu";
import PizzaMenu from "./PizzaMenu";
import { useState } from "react";
import uniqid from 'uniqid';

const App = () => {
  const [toppings] = useState(ToppingMenu());
  const [toppingsMenu, setToppingsMenu] = useState(toppings.getMenu());
  const [topping, setTopping] = useState('');
  const [updatingTopping, setUpdatingTopping] = useState(false);
  const [pizzas] = useState(PizzaMenu());
  const [pizzasMenu, setPizzasMenu] = useState(pizzas.getMenu());
  const [pizza, setPizza] = useState('');
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [updatingPizza, setUpdatingPizza] = useState(false);

  const addTopping = (e, newTopping) => {
    e.preventDefault();
    let result = true;
    result = toppings.addTopping(newTopping);
    if (!result) {
      alert('Failed to add topping - ensure topping name is unique');
    }
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
    let result = true;
    result = toppings.updateTopping(updatingTopping, newTopping);
    if (!result) {
      alert('Failed to update topping name - ensure new name is unique');
    }
    setToppingsMenu(toppings.getMenu());
    setTopping('');
    setUpdatingTopping(false);
  }

  const cancelUpdate = () => {
    setUpdatingTopping(false);
  }

  const changePizza = (e) => {
    setPizza(e.target.value);
  }

  const addPizza = (e, newPizza) => {
    e.preventDefault();
    let result = true;
    result = pizzas.addPizza(newPizza, pizzaToppings);
    if (!result) {
      alert('Failed to add pizza - check that name and toppings are both unique');
    }
    setPizzasMenu(pizzas.getMenu());
    setPizza('');
    setPizzaToppings([]);
  }

  const checkTopping = (e, checkedTopping) => {
    if (pizzaToppings.includes(checkedTopping)) {
      setPizzaToppings(pizzaToppings.filter((t) => t !== checkedTopping));
      return;
    }
    setPizzaToppings(pizzaToppings.concat(checkedTopping));
  }

  const removePizza = (oldPizza) => {
    pizzas.removePizza(oldPizza);
    setPizzasMenu(pizzas.getMenu());
    setUpdatingPizza(false);
  }

  const cancelPizzaUpdate = () => {
    setUpdatingPizza(false);
  }

  const selectPizza = (oldPizza) => {
    setUpdatingPizza(oldPizza);
  }

  const updatePizza = (e, newPizza) => {
    e.preventDefault();
    let result = true;
    result = pizzas.updatePizza(updatingPizza, newPizza, pizzaToppings);
    if (!result) {
      alert('Failed to update pizza - ensure new name and toppings are unique');
    }
    setPizzasMenu(pizzas.getMenu());
    setPizza('');
    setUpdatingPizza(false);
    setPizzaToppings([]);
  }

  return (
    <main>
      <div className="toppings">
        <h2>Toppings</h2>
        <ul>
          {toppingsMenu.map((t) => (
            <li key={uniqid()}>
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
            <label htmlFor="topping">Add New Topping (name required)</label>
            <input type="text" name="topping" value={topping} onChange={toppingChange} />
            <button type="submit">Add</button>
          </form>
        )}
        {updatingTopping && (
          <form onSubmit={(e) => updateTopping(e, topping)}>
            <label htmlFor="topping">Update Topping (name required)</label>
            <input type="text" name="topping" value={topping} onChange={toppingChange} />
            <button type="submit">Update</button>
          </form>
        )}
      </div>
      <div className="pizzas">
        <h2>Pizzas</h2>
        <ul>
          {pizzasMenu.map((p) => (
            <li key={uniqid()}>
              {p.name}
              <button type="button" onClick={() => removePizza(p.name)}>Delete</button>
              {updatingPizza && p.name === updatingPizza && (
                <button type="button" onClick={() => cancelPizzaUpdate()}>Cancel Update</button>
              )}
              {!updatingPizza && (
                <button type="button" onClick={() => selectPizza(p.name)}>Update</button>
              )}
              <ul>
                {p.toppings.map((t) => (
                  <li key={uniqid()}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {!updatingPizza && (
          <form onSubmit={(e) => addPizza(e, pizza)}>
            <label htmlFor="pizza">Add New Pizza (name required)</label>
            <input type="text" name="pizza" value={pizza} onChange={changePizza} />
            <label htmlFor="topping">Choose toppings (minimum: 1)</label>
            {toppingsMenu.map((t) => (
              <label key={uniqid()}>
                <input type="checkbox" checked={pizzaToppings.includes(t)} 
                onChange={(e) => checkTopping(e, t)}/>
                {t}
              </label>
            ))}
            <button type="submit">Add</button>
          </form>
        )}
        {updatingPizza && (
          <form onSubmit={(e) => updatePizza(e, pizza)}>
            <label htmlFor="pizza">Update Pizza (name required)</label>
            <input type="text" name="pizza" value={pizza} onChange={changePizza} />
            <label htmlFor="topping">Update toppings (minimum: 1)</label>
            {toppingsMenu.map((t) => (
              <label key={uniqid()}>
                <input type="checkbox" checked={pizzaToppings.includes(t)} 
                onChange={(e) => checkTopping(e, t)}/>
                {t}
              </label>
            ))}
            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default App;
