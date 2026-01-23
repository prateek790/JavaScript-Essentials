// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);


const items = [
    {name : 'Apple', category: 'Fruit'},
    {name : 'Onion', category:'Vegetable'},
    {name : 'Orange', category:'Fruit'},
    {name : 'Lettuce', category:'Vegetable'}
];
// Now, you want to group these items based on their category value. 
// You can use the reduce() method and return a single object value.


// First, you call the reduce method and pass an empty object {} as the initial accumulator value:

const groupedItems = items.reduce((accumulator,item) => {}, {})


// Next, you check if the accumulator object already has a property with the same name as the category from your item object.

// If not, then declare that property as an empty array as follows:

const category = item.category;
if (!accumulator[category]) {
  accumulator[category] = []
}

// After that, push the item.name property to the accumulator[category] property, and return the accumulator like this:

accumulator[category].push(item.name);
return accumulator


// And that’s it. Now you have an object that groups the items based on the category value:

// const items = [
//   { name: 'Apple', category: 'Fruit' },
//   { name: 'Onion', category: 'Vegetable' },
//   { name: 'Orange', category: 'Fruit' },
//   { name: 'Lettuce', category: 'Vegetable' },
// ];

// const groupedItems = items.reduce((accumulator, item) => {
//   const category = item.category;
//   if (!accumulator[category]) {
//     accumulator[category] = []
//   }
//   accumulator[category].push(item.name);
//   return accumulator
// }, {})

// console.log(groupedItems);