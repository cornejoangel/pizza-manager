import PizzaMenu from '../PizzaMenu';

const pm = PizzaMenu();

test('A list of pizzas can be retrieved', () => {
  expect(pm.getMenu()).toBeDefined();
});

test('We are able to add a new pizza to the menu', () => {
  expect(pm.addPizza({ "name": "supreme", "ingredients": [] })).toBe(true);
  expect(pm.getPizza("supreme")).toMatchObject({ "name": "supreme"});
});

test('We are able to check the ingredient list of a pizza', () => {
  expect(pm.getPizza('supreme').ingredients).toBeDefined();
})