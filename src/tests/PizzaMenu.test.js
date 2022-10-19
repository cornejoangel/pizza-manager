import PizzaMenu from '../PizzaMenu';

const pm = PizzaMenu();

test('A list of pizzas can be retrieved', () => {
  expect(pm.getMenu()).toBeDefined();
});

test('We are able to add a new pizza to the menu', () => {
  expect(pm.addPizza("supreme")).toBe(true);
  expect(pm.getMenu()).toContain('supreme');
});