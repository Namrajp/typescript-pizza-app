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
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  time: Date;
  status: string;
};

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}
function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    return "Pizza not found on the menu.";
  }
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    time: new Date(),
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}
function completeOrder(orderId: number) {
  if (orderQueue.length === 0) {
    return "All orders have been fulfilled!";
  } else {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
      // console.error(`Order with ID ${orderId} not found in the orderQueue.`);
      //  throw new Error("Order not found");
      return;
    }
    order.status = "completed";
    return order;
  }
}

addNewPizza({ name: "Meat Lovers", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 11 });

placeOrder("Meat Lovers");
completeOrder(1);

console.log("Menu:", menu);
console.log("Order queue:", orderQueue);
console.log("Cash in Register:", cashInRegister);
