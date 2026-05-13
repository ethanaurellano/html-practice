outerLimit = 8;
innerLimit = 8;

for (let i = 1; i <= outerLimit; i++) {
    let message = "";
    for (let j = 1; j <= innerLimit; j++) {
        // Code to execute
        if (j % 2 === 0) {
            message = message + "#";
        } else {
            message = message + "-";
        }
    }
    console.log(message);
}

// for (let i = 0; i < 8; i++) {
//     console.log(i, i % 2);
// }
// for (let i = 0; i < 8; i++) {
//     console.log(i + " is even:", i % 2 === 0);
// }
for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log("#");
    } else {
        console.log(" ");
    }
}