// Micro exercise 1
function double(number) {
    return number * 2;
}
const result = double(5);
console.log(result);

// Micro exercise 2
const word = "Hammerhead";
console.log(word[0]);
console.log(word[1]);
console.log(word[9]);
console.log(word.length);

// Micro exercise 3
//const word = "Hammerhead";

for (let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
}

// Micro exercise 4
//const word = "Hammerhead";
// i = 10 - 1 = 9
for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
}
// Micro exercise 5
//const word = "Hammerhead";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
}

console.log(reversed);

const input = "reverse";
let reverse = "";

for (let i = input.length - 1; i >= 0; i--) {
    reverse = reverse + input[i];
}
console.log(reverse);
