
/* ALWAYS HUNGRY */

function alwaysHungry(arr) {
    let filtro = arr.filter(function (element) {
        if (element === "food") {
            return element;
        }
    });


    arr.forEach(element => {
        if (element === "food") {
            console.log("yummy");
        }
    });

    if (filtro.length === 0) {
        console.log("I'm hungry");
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



/* HIGHT PASS FILTER */

function highPass(arr, cutoff) {
    var filteredArr = [];

    arr.forEach(function (element) {
        if (element > cutoff) {
            filteredArr.push(element);
        }
    });


    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


/* BETTER THAN AVERAGE */

function betterThanAverage(arr) {
    var sum = 0;
    arr.forEach(function (element) {
        sum += element;

    });
    var count = 0
    arr.forEach(function (e) {
        if (e > sum / arr.length) {
            count++;
        }

    })
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


/* ARRAY REVERSE */

function reverse(arr) {

    arr.reverse()

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


/* FIBONACCI ARRAY */

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];

    for (let i = 2; i < n; i++) {
        let num = fibArr[i - 2] + fibArr[i - 1]
        fibArr.push(num)
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]