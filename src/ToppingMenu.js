const ToppingMenu = () => {
  let menu = [];

  const getMenu = () => menu;

  const addTopping = (newTopping) => {
    if (menu.includes(newTopping.toLowerCase())) {
      return false;
    }
    menu.push(newTopping.toLowerCase());
    return true;
  }

  const removeTopping = (topping) => {
    menu = menu.filter((t) => t !== topping);
    return true;
  }

  return { getMenu, addTopping, removeTopping };
}

export default ToppingMenu;