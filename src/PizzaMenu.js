const PizzaMenu = () => {
  const menu = [];

  const getMenu = () => menu;

  const addPizza = (newPizza) => {
    menu.push(newPizza);
    return true;
  }

  const getPizza = (pizzaName) => {
    const existingPizza = menu.find((p) => p.name === pizzaName)
    if (existingPizza) {
      return existingPizza;
    }
    return false;
  }

  return { getMenu, addPizza, getPizza };
};

export default PizzaMenu;