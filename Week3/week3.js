const pizzaToppings = [
  "Pepperoni",
  "Sausage",
  "Onions",
  "Green Bell Peppers",
  "Mushrooms"
];

function greetCustomer() {
  console.log("Welcome to Pizza House!");
  console.log("Our toppings are: ");
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (i === pizzaToppings.length - 1) {
      console.log("and" + pizzaToppings[i] + ".");
    } else {
      console.log(pizzaToppings[i] + ".");
    }
  }
}
function getPizzaOrder(size, crust, ...toppings) {
  let orderString = "One" + size + crust + "pizza with";
  orderString += toppings.join(".");
  orderString += "coming up!";
  console.log(orderString);
  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  return { size: size, crust: crust, toppings: toppings };
}

function servePizza(pizza) {
  let orderString = "Order up! Here's your" + pizza.size + " " + pizza.crust;
  orderString += " pizza with" + pizza.toppings.join(" , ") +". Enjoy";
  console.log(orderString);
  return pizza;
}

greetCustomer();

  const order = getPizzaOrder("large", "thin", "Pepperoni", "Onions");
  const cookedPizza = preparePizza(order);
  const servePizza = servePizza(cookedPizza);

  console.log("Final pizza object: ", servePizza);

