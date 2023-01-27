console.log("index.js loaded");

//      WHILE LOOPS
let i = 2;
while (i <= 10) {
    console.log(i);
    i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Luiza"];
let notFound = true;

while (notFound && someArray.length > 0) {
    if( someArray[0] === "Luiza") {
        console.log("Found her!");
        notFound = false;
        } else {
            someArray.shift();
            console.log(someArray[0] + " is not Luiza");
        }
    }


let nr1 = 0;
let nr2 = 1;
let temp;
let fibArray = [];
while (fibArray.length < 25) {
    fibArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}

console.log(fibArray);



//      DO WHILE LOOPS

let number;
do { 
    number = prompt("(do while) enter a number bewteen 0 and 100");
} while (!(number >= 0 && number < 100));


//  PRACTICE 5.2

let counter = 0
let step = 1;
do {
    console.log("counter: " + counter);
    counter += step;
} while (counter < number);



//      FOR LOOPS

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(i);
}

console.log(arr);

//  PRACTICE 5.3

let myWork = [];
let lessonName = "";
let mystatus = true;
for(let i = 1; i <= 10; i++) {
    lessonName = "Lesson "+i;
    myWork.push({"name": lessonName, "status": mystatus});
    mystatus === true ? mystatus = false : mystatus = true;
}

console.log(myWork);
console.log(myWork[0]);


//      NESTED LOOPS

// An array of arrays

let arrofarr = [];
for (let i = 0; i < 3; i++) {
    arrofarr.push([]);
    for (let j = 0; j < 7; j++) {
        arrofarr[i].push(j);
    }
}

console.table(arrofarr);