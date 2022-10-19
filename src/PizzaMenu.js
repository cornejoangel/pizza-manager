const PizzaMenu = () => {
  const menu = [];

  const getMenu = () => menu;

  const addPizza = (name, toppings) => {
    const pizza = { name, toppings };
    if (toppings && toppings.length > 0) {
      menu.push(pizza);
      return true;
    }
    return false;
  };

  const getPizza = (pizzaName) => {
    const existingPizza = menu.find((p) => p.name === pizzaName)
    if (existingPizza) {
      return existingPizza;
    }
    return false;
  };

  const addPizzaTopping = (pizza, topping) => {
    const index = menu.findIndex((p) => p.name === pizza);
    if (index > -1 && !menu[index].toppings.includes(topping)) {
      menu[index].toppings.push(topping);
      return true;
    }
    return false;
  };

  return { getMenu, addPizza, getPizza, addPizzaTopping };
};

export default PizzaMenu;