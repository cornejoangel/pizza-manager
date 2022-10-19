import PizzaMenu from '../PizzaMenu';

const pm = PizzaMenu();

test('A list of pizzas can be retrieved', () => {
  expect(pm.getMenu()).toBeDefined();
});