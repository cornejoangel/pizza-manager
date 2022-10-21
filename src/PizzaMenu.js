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
        used = menu[i].name;
      }
    }
    return used;
  };

  const addPizza = (name, toppings) => {
    const pizza = { name: name.toLowerCase(), toppings };
    const nameUsed = menu.find((p) => p.name === name.toLowerCase())
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
    if (index > -1 && menu.findIndex((p) => p.name === newName.toLowerCase()) === -1) {
      menu[index].name = newName.toLowerCase();
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

  /*
    Conditions required for successful update:
      A pizza with the old name already exists
      A pizza with the new name does not already exist
      We are provided a new topping list
      The new topping list is not identical to one already in use

    You can update just the name or the toppings

    This works by first attempting to update the name
      If the name is already in use by another pizza updatePizza returns
    Then attempting to update the toppings 
      If the toppings were identical to the toppings of a different pizza 
        then we revert the name change and also do not change the toppings
  */
  const updatePizza = (oldName, newName, newToppings) => {
    const index = menu.findIndex((p) => p.name === oldName);
    const nameUsed = menu.findIndex((p) => p.name === newName.toLowerCase());
    if (menu[nameUsed] === menu[index] || nameUsed === -1) {
      updateName(oldName, newName);
    } else {
      // attempting to update to a name that already exists - return
      return false;
    }

    if (newToppings && newToppings.length > 0 && (!toppingsUsed(newToppings) || toppingsUsed(newToppings) === menu[index].name)) {
      updateToppings(oldName, newToppings);
      return true;
    } 
    // attempted to update to a topping list that already exists - revert name change
    updateName(newName, oldName);
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
    updateToppings,
    updatePizza
  };
};

export default PizzaMenu;