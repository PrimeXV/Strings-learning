'use strict';

//////////////////////////////////
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // commuted property name
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  // commuted property name
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // commuted property name
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Enhanced Literal Objects;
  openingHours, // Shorthand Property Name

  // shorthand method definition
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // object destructuring from method
  orderDelivery({ starterIndex = 0, mainIndex = 1, address, time = '1:00am' }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `The main ingredient is ${mainIngredient} with other ingredients (${otherIngredients})`
    );
  },
};

/////////////////////////////////////////////////
// More exercises on string
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
// 🔴 Delayed Departure from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const reArrange = flights => {
  // Split the flights string into individual flight details
  const flightDetails = flights.split('+');

  // Loop over each flight detail
  for (const [index, flight] of flightDetails.entries()) {
    // Destructure the split flight details
    const [status, from, to, time] = flight.split(';');

    // Format the elements
    const formattedFrom = from.slice(0, 3).toUpperCase();
    const formattedTo = to.slice(0, 3).toUpperCase();
    const formattedStatus = status.replaceAll('_', ' ').trim();
    const formattedTime = time.replace(':', 'h');

    // Construct the result string
    const result = `🔴 ${formattedStatus} from ${formattedFrom} to ${formattedTo} (${formattedTime})`;

    // Print the result with padding
    index === 1 || index === 3
      ? console.log(result.slice(2).padStart(44))
      : console.log(result.padStart(44));
  }
};
reArrange(flights); // Call the function to execute the code

/*
///////////////////////////////////////
//  Working with Strings: Part3
// Split and Join
console.log('a+very+nice+string'.split('+')); // Used to split string with the stuff passed in
console.log('Ganiyu Hassan Taiwo'.split(' '));

const [firstName, lastName] = 'Ganiyu Hassan'.split(' ');
// console.log(`Mr ${firstName} ${lastName.toUpperCase()}`);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // join() is used to join elements in an array with anything passed in
console.log(newName);

const capitalizeName = name => {
  const lowerCase = name.toLowerCase(); // convert name passed in to lowercase
  const splitName = lowerCase.split(' '); // split name element into an array
  const capitalizedName = []; // Create new Array
  for (const each of splitName) {
    // const capitalized = each[0].toUpperCase() + each.slice(1); // capitalize first letter of each element
    const capitalized = each.replace(each[0], each[0].toUpperCase());
    capitalizedName.push(capitalized); // push each element into the capitalizedName array
  }

  return console.log(capitalizedName.join(' ')); // join() the capitalizedName array with ' '
};
capitalizeName('jessica ann smith davis');
capitalizeName('ganiyu hassan');
capitalizeName('GAniYU taiWO');

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+')); // This will pad the message string with + sign at the beginning of the message till it reaches 25 characters
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

console.log(message.padEnd(25, '+')); // This will pad the message string with + sign at the end of the message till it reaches 25 characters

// Example
const maskCreditCard = number => {
  const str = String(number);
  const masked = str.slice(-4).padStart(str.length, '*');
  return masked;
};
console.log(maskCreditCard(4944884));
console.log(maskCreditCard(4944884202034848));
console.log(maskCreditCard('3348594938477555774747'));

// Repeat method(This allows us to repeat same string multiple times)
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = n => {
  console.log(`There are ${n} planes in the line ${'🛫'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
////////////////////////////////////////////
// Working with Strings: Part2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// console.log('Jonas'.toUpperCase()); // calling string directly also work with it

// Fix the capitalization in the name
const fixCapitalization = passengerName => {
  const lowerCase = passengerName.toLowerCase();
  const passengerCorrect = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  return console.log(`Corrected✅: ${passengerCorrect}`);
};
fixCapitalization('jOnAs'); // should be 'Jonas'

// Comparing emails
const email = 'hello@jonas.io'; // correct email method

const compareEmail = (userInput, correctFormat) => {
  const normalizedEmail = userInput.toLowerCase().trim();
  console.log(
    normalizedEmail === correctFormat
      ? 'Correct✅'
      : 'Incorrect❌, use this format (hello@jonas.io)'
  );
};
compareEmail(' Hello@Jonas.Io \n', 'hello@jonas.io'); // user input
compareEmail(' Hello@Jonas.Io jenejn', 'hello@jonas.io'); // user input

// Replacing parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

// Replacing entire words
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
const resolved = announcement.replaceAll('door', 'gate');
if (announcement.includes('door')) console.log(resolved); // checks if the string includes door then it perform the above action of replacing all door word to gate in the string.

// Booleans: 3 methods that returns it in a string
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb')); // to check if the string start with a certain word

const checkIfPlaneIsFamily = plane => {
  if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
  } else {
    console.log('Part of a DIFFERENT family');
  }
};
checkIfPlaneIsFamily(plane);

// Practice exercise
// check if the baggage of a certain passenger is basically allowed to be checked in
const checkPassengerBaggage = items => {
  const baggage = items.toLowerCase(); // aLL data must be converted to lowercase before working with them
  baggage.includes('knife') || baggage.includes('gun')
    ? console.log(
        'You are NOT allowed on the plane due to possession of harmful belongings'
      )
    : console.log('You are allowed on the plane, WELCOME ABOARD!');
};
checkPassengerBaggage('I have a laptop some Foods and a pocket Knife');
checkPassengerBaggage('Socks and camera');
checkPassengerBaggage('Got some snacks and a gun for protection');
*/

/*
////////////////////////////////////////////
// Working with Strings: Part1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // check position of a certain alphabet/number in the array/ string
console.log(airline.lastIndexOf('r')); // check last position of a certain alphabet/number in the array/string
console.log(airline.indexOf('Portugal')); // Search position for all string checked, if not found. it returns -1

console.log(airline.slice(4)); // result is known as substring and the original string isn't affected. rather it create a new string to insert the sliced word/words

console.log(airline.slice(4, 7)); // Beginning and the end, thus the result will be what is between both

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // from the back with negative
console.log(airline.slice(1, -1)); // specifying negative end

// write a function that receives an airplane seat and locks to the console whether it is a middle seat or not
const checkMiddleSeat = seat => {
  // B and E are middle seat
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('It is a middle seat😁')
    : console.log('You got lucky😊');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));

// console.log(new String('Jonas').slice(1));
console.log(typeof new String('Jonas').slice(1));
*/

/*
///////////////////////////////////
// Maps: Iteration (another way of creating map instead of using set)
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours)); // Because entries gives the result of array in array, key and value like what map use
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

// Boolean keys
// check if answer is javascript then log either true or false value
console.log(question.get(question.get('correct') === answer));

// Conversion of map to array: Done by using spread operator
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
//////////////////////////////////////
// Maps: Fundamentals
const rest = new Map(); // best way to use map is to create an empty map then use the set method

// To set key and it value to the map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set('2', 'Lisbon, Portugal')); // set method returns the updated map

rest
  .set('categories', restaurant.categories)
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// To get key from the map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Example
const time = 27;
console.log(
  rest.get(
    time > rest.get('open') && time < rest.get('close')
    // ? console.log(`${rest.get('name')}: ${rest.get(true)}`)
    // : console.log(`${rest.get('name')}: ${rest.get(false)}`)
  )
);

// To  check if a map contains a certain key
console.log(rest.has('name'));

// To delete key from the map
rest.delete('2');
console.log(rest.has('2'));

//  To check the length of map called SIZE
console.log(rest.size);

// To clear all keys in the map
// rest.clear();
console.log(rest);

// Setting array to map Key
const arr = [1, 2]; // In order to be able to get the same array from the map, we have to assign the array to a variable then use it as the key in the set. so that javascript memory can identify it as not different when called to get
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
////////////////////////////////////////////
// Sets (it is a collection of unique values)

const orderSet = new Set([
  'Pasta',
  'pizza',
  'pizza',
  'risotto',
  'Pasta',
  'pizza',
]);
console.log(orderSet); // {'pizza', 'pasta', 'risotto'}

console.log(new Set('jonas')); // {'j', 'o' 'n', 'a', 's' }
console.log(new Set()); // empty set

// check for size of the set
console.log(orderSet.size); // 3

// check if a certain element is available in a set
console.log(orderSet.has('pizza')); // True
console.log(orderSet.has('Bread')); // false

// Adding new element to a set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); // remember it won't repeat itself
console.log(orderSet);

// Delete element/elements in a set
orderSet.delete('pizza');
// orderSet.delete('risotto');
console.log(orderSet);

// To delete all elements in a set
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // put the result in an array
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // check size

console.log(new Set('GaniyuHassanTaiwo').size); // check how many letter in the string
*/

/*
/////////////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open for ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day},`;
  // console.log(day);
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

for (const value of values) {
  console.log(value.open, value.close);
}

// Property ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
////////////////////////////////
// Optional Chaining(?.)

// Without optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we are ${open}`);
}

// On Method
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist!");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist!");

// On Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

// const users = [];

console.log(users[0]?.name ?? 'User array is empty!');

users.length >= 0
  ? console.log(users[0].name)
  : console.log('Users array is empty');
*/

/*
/////////////////////////
// Looping Arrays: The- for-Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); // for current element

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // for current index
}

// console.log([...menu.entries()]);
*/

/*
/////////////////////////////////
// Logical assignment operator

// --- OR Assignment---
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// use OR assignment instead 
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// use nullish assignment operator which remain false only for null and undefined but not falsy values unlike the OR assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
///////////////////////////
// The Nullish Coalescing operator(??)
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10; // use this instead of the ternary operator above
console.log(guest2);

// Nullish operator works with null and undefined instead of falsy values(it doesn't include empty string and zero(0))
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);
*/

/*
///////////////////////////////
// Short Circuiting (&& and ||), use ANY data type, return ANY data type.
console.log('---OR---');

console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23; // Note, both solution doesn't work for zero because it is a falsy value and there can be 0 number of guest that will be needed to be computed
const guess1 = restaurant.numGuests ? restaurant.numGuests : 10; // above
console.log(guess1);

const guest2 = restaurant.numGuests || 10; // use this instead of the ternary operator above
console.log(guest2);

console.log('---AND---');
//  AND Operator: this immediately return the false value it encounter after
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('Hello' && 23 && null && 'jonas'); // null is a falsy value

// Former way
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// New way
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach'); // This check if the orderPizza function is available then proceed to call it but if it is absent, it won't call the next one and returns as null
*/

/*
//////////////////////////////////////////
// Rest Pattern and Parameters

/////  1) Destructuring
// Application to arrays
const arr = [1, 2, ...[3, 4]]; // spread operator because on the right hand side of assignment operator(=)
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5]; // Rest syntax because on the left hand side of assignment operator(=)
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Application to objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

///// 2) Functions using rest parameters. same as rest syntax
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return console.log(sum);
};
add(2, 3);
add(2, 8, 6, 8, 7, 7, 7);
add(2, 13, 100, 189, 456, 789);

const x = [23, 5, 7];
add(...x); // packed in to an array

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

restaurant.orderPizza('mushrooms'); // ordering just one without the use of rest parameter

*/

/*
///////////////////////
// Spread Operator, this creates new array without modifying the existing/original one unlike the push/unshift array methods

const arr = [7, 8, 9];
arr.unshift(1, 2);
console.log(arr);

const arp = [7, 8, 9];
const newArr = [1, 2, ...arp];
console.log(newArr);

console.log(...newArr); // this will bring out the elements in the array individually when spread operator is applied.
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays or more together
const addArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(addArr);

// Spread Operator can be applied ot iterables. Iterables are arrays, strings, maps, sets BUT not Objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // break str down to each elements with it letter
console.log(...str); // same as console.log('j', 'o', 'n', 'a', 's');

// calling function in spread operator with real world examples
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients);

// Spread operator works on objects even though it is not iterable
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Now used to create a copy instead of using Object.assign
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
/////////////////////////////
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing the variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variable
let a = 111;
let b = 999;
const obj = { x: 23, y: 7, c: 14 };

({ x: a, y: b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c }, // assigning new variable while destructuring
} = openingHours;
console.log(o, c);


// calling the function with an object that will be destructed inside the function
restaurant.orderDelivery({
  time: '3:45pm',
  address: 'Surest plug, God villa, Idumota',
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({
  address: 'Surest plug, God villa, Idumota',
});
*/

/*
///////////////////////////
// Destructuring Arrays

// // with destructure array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// changing the food categories in  the main and secondary
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// switching values using destructuring
[main, secondary] = ['Amala', 'Iyan with Egusi soup'];
console.log(main, secondary);

// Receive to return values from a function
const [starter, Main] = restaurant.order(2, 0);
console.log(starter, Main);

// Destructuring with nested array(An array inside and Array)
const nested = [2, 4, [5, 6]];
const [a, , b] = nested;
console.log(a, b);
const [a, , [t, w]] = nested;
console.log(a, t, w);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);

const [p = 1, q = 1, r = 1] = [8]; // default value replacing any empty variable when checked in the array
console.log(p, q, r);
*/
