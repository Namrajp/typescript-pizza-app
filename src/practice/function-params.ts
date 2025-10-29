/// Functions can have optional parameters using the ? symbol after the parameter name

function drive(kilometers?: number): void {
  if (kilometers) {
    console.log(`Drive the car for ${kilometers} kilometers`);
  } else {
    console.log(`Drive the car`);
  }
}

function drives(kilometers = 10): void {
  console.log(`Drive the car for ${kilometers} kilometers`);
}

// Function with default and rest parameters
function driving(kilometers = 10, ...occupants: string[]) {
  console.log(
    `Drive the car for ${kilometers} kilometers, with those people on it:`
  );
  occupants.map((person) => console.log(person));
}

driving(20, "Flavio", "Roger", "Syd");
drive();
drives();
drives(25);
