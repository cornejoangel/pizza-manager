const PizzaMenu = () => {
  const menu = [];

  const getMenu = () => menu;

  const addPizza = (newPizza) => {
    menu.push(newPizza);
    return true;
  }

  return { getMenu, addPizza };
};

export default PizzaMenu;