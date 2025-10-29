// Define an interface for a Car
interface Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

// Use the interface to create an object
const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  isElectric: false,
};

// Function that uses the Car interface
function displayCarInfo(car: Car): void {
  console.log(`${car.year} ${car.make} ${car.model}`);
  console.log(`Electric: ${car.isElectric ? "Yes" : "No"}`);
}

// Call the function with our car object
displayCarInfo(myCar);
