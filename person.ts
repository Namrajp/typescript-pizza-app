type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // optional property // nested object type
};

const person1: Person = {
  name: "Alice",
  age: 23,
  isStudent: true,
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

const person3: Person = {
  name: "Charlie",
  age: 28,
  isStudent: false,
  address: {
    street: "789 Oak St",
    city: "Chocolate Factory",
    zipCode: "11223",
  },
};

function displayPersonInfo(person) {
  console.log(
    `Name: ${person.name} lives at ${person.address?.street || "N/A"}, ${
      person.address?.city || "N/A"
    }`
  );
}
// type safety reduced by adding flexible optional property of address
// undefined address error avoided using optional chaining operator (?.)

displayPersonInfo(person2);
displayPersonInfo(person1);

// Primitive types and Arrays
let age: number = 35;
let ages: number[] = [25, 30, 35, "forty"]; // Error: Type 'string' is not assignable to type 'number'
ages.push(true); // Error: Type 'boolean' is not assignable to type 'number'
let mixedAges: (number | string)[] = [25, "thirty", 35];

let people: Person[] = [person1, person2, person3]; // array of Person objects
let people1: Array<Person> = [person1, person2, person3]; // generic array type
let coordinates: [number, number] = [40.7128, -74.006]; // tuple for fixed structure
