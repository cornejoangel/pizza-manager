const ToppingMenu = () => {
  let menu = [];

  const getMenu = () => menu;

  const addTopping = (newTopping) => {
    menu.push(newTopping);
    return true;
  }

  const removeTopping = (topping) => {
    menu = menu.filter((t) => t !== topping);
    return true;
  }

  return { getMenu, addTopping, removeTopping };
}

export default ToppingMenu;