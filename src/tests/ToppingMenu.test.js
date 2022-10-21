import ToppingMenu from '../ToppingMenu';

const tm = ToppingMenu();

test('A list of toppings can be retrieved', () => {
  expect(tm.getMenu()).toBeDefined();
});

test('We are able to add a new topping to the menu', () => {
  expect(tm.addTopping('mushroom')).toBe(true);
  expect(tm.getMenu()).toContain('mushroom');
});

test('We are able to remove a topping from the menu', () => {
  expect(tm.getMenu()).toContain('mushroom');
  expect(tm.addTopping('anchovy')).toBe(true);
  expect(tm.removeTopping('mushroom')).toBe(true);
  expect(tm.getMenu()).not.toContain('mushroom');
});

test('We are not able to add duplicate toppings to the menu', () => {
  expect(tm.addTopping('mushroom')).toBe(true);
  expect(tm.getMenu()).toContain('mushroom');
  expect(tm.addTopping('mushroom')).toBe(false);
  expect(tm.addTopping('Mushroom')).toBe(false);
  expect(tm.addTopping('MUSHROOM')).toBe(false);
});

test('We are able to update toppings already on the menu', () => {
  expect(tm.addTopping('pep')).toBe(true);
  expect(tm.updateTopping('pep', 'pepperoni')).toBe(true);
  expect(tm.getMenu()).not.toContain('pep');
  expect(tm.getMenu()).toContain('pepperoni');
});

test('We are not able to update a topping to be an existing topping', () => {
  expect(tm.getMenu()).toContain('mushroom');
  expect(tm.addTopping('mush')).toBe(true);
  expect(tm.updateTopping('mush', 'mushroom')).toBe(false);
  expect(tm.getMenu()).toContain('mush');
});

test('Cannot update to an empty pizza name', () => {
  expect(tm.addTopping("spinach")).toBe(true);
  expect(tm.updateTopping("spinach", "")).toBe(false);
})