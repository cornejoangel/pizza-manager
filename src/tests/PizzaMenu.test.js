import PizzaMenu from '../PizzaMenu';

const pm = PizzaMenu();

test('A list of pizzas can be retrieved', () => {
  expect(pm.getMenu()).toBeDefined();
});

test('We are able to add a new pizza to the menu', () => {
  expect(pm.addPizza("supreme", ["pepperoni", "sausage"])).toBe(true);
  expect(pm.getPizza("supreme")).toMatchObject({ "name": "supreme"});
});

test('We are able to check the ingredient list of a pizza', () => {
  expect(pm.getPizza('supreme').toppings).toBeDefined();
  expect(pm.getPizza('supreme').toppings).toContain("pepperoni");
  expect(pm.getPizza('supreme').toppings).toContain("sausage");
});

test('We are able to add ingredients to an existing pizza', () => {
  expect(pm.addPizzaTopping('supreme', 'olive')).toBe(true);
  expect(pm.getPizza('supreme').toppings).toContain('olive');
});