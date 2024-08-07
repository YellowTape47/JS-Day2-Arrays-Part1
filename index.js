// identifing the array
let groceries = ["Soda", "Fruits", "Vegitable", "Water", "Bread", "Bebsi :)"];

// prints the second element only
console.log(`the second element is --> ${groceries[1]}`);

// print the last element only
console.log(
  `the last element in the array is --> ${groceries[groceries.length - 1]}`
);

// removes the last element and print it
console.log(
  `the element that is removed from the array --> ${groceries.pop()}`
);

// adding 2 elements and print it
groceries.push("Any1", "Any2");
console.log(groceries);

// challenge
// delete the 3rd element in the array
groceries.splice(2, 1);
console.log(groceries);

// insert new element at the begining of the aray
groceries.splice(0, 0, "new element");
console.log(groceries);

// challenge
// removing the first two elements and replacing them with "ketchup" , "chili"
groceries.splice(0, 2, "Ketchup", "Chili");
console.log(groceries);
