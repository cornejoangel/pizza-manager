import ToppingMenu from '../ToppingMenu';

const tm = ToppingMenu();

test('A list of toppings can be retrieved', () => {
  expect(tm.getMenu()).toBeDefined();
});

test('We are able to add a new topping to the menu', () => {
  expect(tm.addTopping('mushroom')).toBe(true);
  expect(tm.getMenu()).toContain('mushroom');
})

test('We are able to remove a topping from the menu', () => {
  expect(tm.getMenu()).toContain('mushroom');
  expect(tm.addTopping('anchovy')).toBe(true);
  expect(tm.removeTopping('mushroom')).toBe(true);
  expect(tm.getMenu()).not.toContain('mushroom');
})