interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const person1: Person = {
  name: "Alice",
  age: 30,
  // email is not required
};

const person2: Person = {
  name: "Bob",
  age: 25,
  email: "bob@example.com", // Optional property provided
};

// Union types

// Define a union type
type Status = "active" | "inactive" | "pending";

// Function using the union type
function setUserStatus(status: Status): void {
  console.log(`User status set to: ${status}`);
}

// Valid usage
setUserStatus("active");
setUserStatus("pending");

// This would cause a compile-time error:
// setUserStatus('approved');
