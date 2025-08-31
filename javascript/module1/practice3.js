// // Name block of code that performs a task
// function printSomething(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
// }

// printSomething();

// function greet(){
//     console.log("Hello");
// }

// greet();

// function add(a,b){
//     let result = a +b;
//     return result;
// }

// console.log(add(2,3));


// function calculateArea(width, height) {
//   return width * height;
// }

// let area1 = calculateArea(55, 10);
// let area2 = calculateArea(3, 7);

// console.log("Area 1:", area1);  // 50
// console.log("Area 2:", area2);  // 21

// //mini challenge
// function double(a){
//     return a * 2;
// }
// let value1 = double(5);
// console.log("seeing doulbe of 5 = " + value1);



// function fullName(first, lastName){
//     return first + " " + lastName;
// }
// let name = fullName("Kayla", "Salmon");
// console.log(name);

// function isEven(number){
//     if(number % 2 === 0){
//     return "true";
//     } else {
//         return "false"
//     }
// }
// let number = isEven(3)
// console.log(number);

// function greetEveryone(names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log("Hi, " + names[i]);
//   }
// }

// greetEveryone(["Ali", "Sara", "John"]);


// function filterItems(items){
//     let result = [];
//     for (let i = 0; i < items.length; i++){
//     if(items[i] >= 0){
//         result.push(items[i]);
//     }
// }
// return result;
// }
// console.log(filterItems([4, -5, 5, 6, -8, -8]));


// function reverseWords(str){
//     let newStr = str.split(" ");
//     let reVerse = []
//     for (i = newStr.length -1; i >= 0; i--){
//         if (i >= 0){
//             reVerse.push(newStr[i])
//         }
//     }
//     let reVstr = reVerse.join(" ");
//   return reVstr; // reverse those words
// }
// console.log(reverseWords("Don't you ever say that!"))


// function rainAmount(mm){
//     if (mm < 40) {
//          return "You need to give your plant " + (40 - mm) + " mm of water"
//     } else {
//          return "Your plant has had more than enough water for today!"
//     };
// }
// console.log(rainAmount(15));


// function booleanToString(b){
//   if(b = true){
//     return "true"
//   }else if(b = false) {
//     return "false"
//   }
// }
// console.log(booleanToString(false));

function greetUser(){
    console.log("Hello, student!");
}

function addTwoNumbers(a,b){
    let result = (a + b)
    console.log(result);
}
addTwoNumbers(5, 3);

function greet(names){
    return "Welccome, " + names;
}

function countToFive(){
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }
}
countToFive();

function printRange(n){
    for (let i = 1; i <= n; i++)
        console.log(i);
}
printRange(7);

function printArrayElements(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function getPositiveNumbers(numbers){
    let result = []
    for (let i = 1; i <= numbers.length; i++){
        if(numbers[i] > 0){
            result.push(numbers[i]);
        }
    }
    return result;
}

function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
     sum += arr(i);
    }
    return sum;
}

function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function countEvens(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            total++;
        }
    }
    return total;
}

function findMax(arr){
    let max = arr[0];
    for (i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function fizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0){
        return "FizzBuzz";
    } else if (n % 3 === 0 && n % 5 !== 0){
        return "Fizz";
    } else if (n % 3 !== 0 && n % 5 === 0){
        return "Buzz";
    } else {
        return n;
    }
}

console.log(fizzBuzz(3));
