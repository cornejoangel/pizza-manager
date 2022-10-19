import ToppingMenu from '../ToppingMenu';

const tm = ToppingMenu();

test('A list of toppings can be retrieved', () => {
  expect(tm.getMenu()).toBeDefined();
});

test('We are able to add a new topping to the menu', () => {
  expect(tm.addTopping('mushroom')).toBe(true);
  expect(tm.getMenu()).toContain('mushroom');
})