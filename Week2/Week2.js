let pizzaPlace = "Abby Pie";
let numberOfToppings = 12;

console.log(`pizzaPlace : ${pizzaPlace}, Type :${typeof pizzaPlace}`);
console.log(`numberOFToppings : ${numberOFToppings}, Type :${typeof numberOFToppings}`);

console.log(`Welcome to ${pizzaPlace}. I offer a huge variety of ${numberOFToppings} for you to choose from. `
);

if (numberOfToppings < 10) {
  console.log("Quality,not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
