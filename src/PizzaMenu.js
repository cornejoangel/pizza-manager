const PizzaMenu = () => {
  const menu = [];

  const getMenu = () => menu;

  const addPizza = (newPizza) => {
    menu.push(newPizza);
    return true;
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
    if (index > -1 && !menu[index].ingredients.includes(topping)) {
      menu[index].ingredients.push(topping);
      return true;
    }
    return false;
  }

  return { getMenu, addPizza, getPizza, addPizzaTopping };
};

export default PizzaMenu;