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

  const updateTopping = (oldTopping, newTopping) => {
    if (newTopping.length === 0 || newTopping === '') {
      return false;
    }
    if (!menu.includes(oldTopping.toLowerCase()) || menu.includes(newTopping.toLowerCase())) {
      return false;
    }
    const index = menu.findIndex((t) => t === oldTopping.toLowerCase());
    menu[index] = newTopping.toLowerCase();
    return true;
  };

  return { getMenu, addTopping, removeTopping, updateTopping };
}

export default ToppingMenu;