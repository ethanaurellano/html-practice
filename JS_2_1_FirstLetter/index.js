const lijst = ["aap", "noot", "mies"];

console.log(lijst[1]);

const items = ["pen", "book", "desk"];

for (const item of items) {
    console.log(item[0]); // Prints "pen", then "book", then "desk"
}

//My solution below
const list = ["aap", "noot", "mies"];
//console.log(list);

const collection = [];

for (const i of list) {
    console.log(i[0]);
    collection.push(i[0]);
}

console.log(collection);