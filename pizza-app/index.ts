const menu = [
  {
    name: "Margherita",
    price: 8,
  },
  {
    name: "Pepperoni",
    price: 10,
  },
  {
    name: "Hawaiian",
    price: 9,
  },
  {
    name: "Veggie",
    price: 9,
  },
  {
    name: "BBQ Chicken",
    price: 11,
  },
];
type Pizza = {
  name: string,
  price: number,
};

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    time: new Date(),
    status: "ordered",
  };
  orderQuerue.push(newOrder);
  return newOrder;
}
function completeOrder(orderId) {
  if (orderQueue.length === 0) {
    return "All orders have been fulfilled!";
  } else {
    const order = orderQueue.find((order) => order.id === orderId);
    order.status = "completed";
    return order;
  }
}

addNewPizza({ name: "Meat Lovers", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 11 });

placeOrder("Meat Lovers");
completeOrder("1");

console.log("Menu:", menu);
console.log("Order queue:", orderQuerue);
console.log("Cash in Register:", cashInRegister);

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  addresss: {
    street: string,
    city: string,
    zipCode: string,
  },
};

const person1: Person = {
  name: "Alice",
  age: 23,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zipCode: "12345",
  },
};
const person2: Person = {
  name: "Bob",
  age: 30,
  isStudent: false,
  address: {
    street: "456 Elm St",
    city: "Builderburg",
    zipCode: "67890",
  },
};
