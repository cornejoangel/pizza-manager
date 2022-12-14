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
  expect(pm.getPizza('supreme').toppings).toContain("pepperoni");
  expect(pm.getPizza('supreme').toppings).toContain("sausage");
  expect(pm.getPizza('supreme').toppings).toContain('olive');
});

test('We are not able to add a pizza without toppings', () => {
  expect(pm.addPizza("veggie")).toBe(false);
  expect(pm.addPizza("cheese", [])).toBe(false);
})

test('We are able to remove a pizza from the menu', () => {
  expect(pm.addPizza("veggie", ["onion"])).toBe(true);
  expect(pm.getPizza("veggie")).toBeTruthy();
  expect(pm.removePizza("veggie")).toBe(true);
  expect(pm.getPizza("veggie")).toBeFalsy();
})

test('We are able to remove toppings from a pizza', () => {
  expect(pm.getPizza('supreme').toppings).toContain('olive');
  expect(pm.removePizzaTopping('supreme', 'olive')).toBe(true);
  expect(pm.getPizza('supreme').toppings).toContain("pepperoni");
  expect(pm.getPizza('supreme').toppings).toContain("sausage");
  expect(pm.getPizza('supreme').toppings).not.toContain('olive');
})

test('We are able to update the name of a pizza', () => {
  expect(pm.getPizza('supreme').name).toBeDefined();
  expect(pm.getPizza('mega').name).not.toBeDefined();
  expect(pm.updateName('supreme', 'mega')).toBe(true);
  expect(pm.getPizza('supreme').name).not.toBeDefined();
  expect(pm.getPizza('mega').name).toBeDefined();
})

test('We are not able to create a pizza with a duplicate name', () => {
  expect(pm.addPizza("veggie", ["onion"])).toBe(true);
  expect(pm.addPizza("veggie", ["olive"])).toBe(false);
})

test('We are not able to change a pizza name to one that exists', () => {
  expect(pm.getPizza('mega').name).toBeDefined();
  expect(pm.updateName('mega', 'supreme')).toBe(true);
  expect(pm.updateName('veggie', 'supreme')).toBe(false);
})

test('We are not able to create a pizza with a duplicate topping list', () => {
  expect(pm.getPizza('veggie').toppings).toEqual(["onion"]);
  expect(pm.addPizza("vegetarian", ["onion"])).toBe(false);
})

test('We can update a pizza topping list with one function', () => {
  expect(pm.addPizza('veg', ["spinach"])).toBe(true);
  expect(pm.getMenu()).toContainEqual({"name": 'veg', "toppings": ["spinach"]});
  expect(pm.updateToppings("veg", ["onions", "artichoke", "bell peppers"])).toBe(true);
  expect(pm.getMenu()).toContainEqual({"name": 'veg', "toppings": ["onions", "artichoke", "bell peppers"]});
})

test('We can update a pizza name and toppings with one function', () => {
  expect(pm.addPizza('meaty', ['ham', 'sausage'])).toBe(true);
  // attempting to duplicate a name
  expect(pm.getMenu()).toContainEqual({"name": 'veg', "toppings": ["onions", "artichoke", "bell peppers"]});
  expect(pm.updatePizza('meaty', 'veg', ['ham', 'sausage'])).toBe(false);
  // attempting to duplicate a topping list
  expect(pm.updatePizza('meaty', 'meaty', ['onions', 'artichoke', 'bell peppers'])).toBe(false);
  // now just adding a topping
  expect(pm.updatePizza('meaty', 'meaty', ['ham', 'sausage', 'pepperoni'])).toBe(true);
  expect(pm.getMenu()).toContainEqual({"name": 'meaty', "toppings": ["ham", "sausage", "pepperoni"]});
})

// coverage is a little overkill with this test and the previous one but for the
// purposes of this project I am fine with overkill

test('We can update just the name or toppings with the unified update function', () => {
  expect(pm.addPizza("classic", ['pepperoni'])).toBe(true);
  // attempting to just update the toppings
  expect(pm.updatePizza("classic", "classic", ['pepperoni', 'extra cheese'])).toBe(true);
  // attempting to just update the name
  expect(pm.updatePizza("classic", "the classic", ['pepperoni', 'extra cheese'])).toBe(true);
})

test('Pizza names are case insensitive', () => {
  expect(pm.getPizza("supreme")).toMatchObject({ "name": "supreme"});
  expect(pm.getPizza("Supreme")).toBe(false);
  expect(pm.getPizza("SUPREME")).toBe(false);
  expect(pm.addPizza("Supreme", ["something"])).toBe(false);
  expect(pm.getPizza("Supreme")).toBe(false);
  expect(pm.addPizza("SUPREME", ["something else"])).toBe(false);
  expect(pm.getPizza("SUPREME")).toBe(false);
})

test('Cannot update to an empty pizza name', () => {
  expect(pm.addPizza("meat", ["sausage"])).toBe(true);
  expect(pm.updatePizza("meat", "", ["sausage", "ham"])).toBe(false);
})