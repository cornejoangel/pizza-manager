const PizzaMenu = () => {
  let menu = [];

  const getMenu = () => menu;

  /*
    Helper function for addPizza to check if we already have a pizza on our menu
    with the same list of toppings as the list that is provided here as an 
    argument

    returns true if the provided topping list is already represented in the menu
  */
  const toppingsUsed = (toppings) => {
    let used = false;
    for (let i = 0; i < menu.length; i += 1) {
      if (menu[i].toppings.every((t) => toppings.includes(t)) &&
        toppings.every((t) => menu[i].toppings.includes(t))
      ) {
        used = true;
      }
    }
    return used;
  };

  const addPizza = (name, toppings) => {
    const pizza = { name, toppings };
    const nameUsed = menu.find((p) => p.name === name)
    if (toppings && toppings.length > 0 && !nameUsed && !toppingsUsed(toppings)) {
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

  const removePizza = (pizza) => {
    menu = menu.filter((p) => p.name !== pizza);
    return true;
  }

  const removePizzaTopping = (pizza, topping) => {
    const index = menu.findIndex((p) => p.name === pizza);
    if (index > -1 && menu[index].toppings.includes(topping)) {
      menu[index].toppings = menu[index].toppings.filter((t) => t !== topping);
      return true;
    }
    return false;
  }

  const updateName = (pizza, newName) => {
    const index = menu.findIndex((p) => p.name === pizza);
    // also check that the new name is not already used
    if (index > -1 && menu.findIndex((p) => p.name === newName) === -1) {
      menu[index].name = newName;
      return true;
    }
    return false;
  }

  const updateToppings = (pizza, newToppings) => {
    const index = menu.findIndex((p) => p.name === pizza);
    if (index > -1) {
      menu[index].toppings = newToppings;
      return true;
    }
    return false;
  }

  return { 
    getMenu, 
    addPizza, 
    getPizza, 
    addPizzaTopping, 
    removePizza, 
    removePizzaTopping,
    updateName,
    updateToppings
  };
};

export default PizzaMenu;