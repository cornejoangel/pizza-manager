import ToppingMenu from '../ToppingMenu';

const tm = ToppingMenu();

test('A list of toppings can be retrieved', () => {
  expect(tm.getMenu()).toBeDefined();
})