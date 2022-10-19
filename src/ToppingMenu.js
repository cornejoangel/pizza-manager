const ToppingMenu = () => {
  let menu = [];

  const getMenu = () => menu;

  const addTopping = (newTopping) => {
    menu.push(newTopping);
    return true;
  }

  return { getMenu, addTopping };
}

export default ToppingMenu;