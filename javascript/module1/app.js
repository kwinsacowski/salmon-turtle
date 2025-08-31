// let fruits = ["apple", "banana", "cherry"]
// console.log(fruits[1]);
// fruits.splice[1, 0, "blueberry"];

// fruits.push ("orange");
// fruits.pop ();
// fruits.unshift("grape")
// fruits.shift();

// let numbers = [3, 4, 9, 12];
// console.log(numbers[0] + numbers[3]);
// console.log(numbers.length);
// numbers.push(15, 18);
// console.log(numbers.length);

// numbers[1] = null;
// console.log(numbers);
// let colors = ["red", "blue", "green"];
// colors[2] = "black";
// console.log(colors);

// let favorites = ["mac and cheese", "cheese ravioli", "gook"];
// favorites.push("burgers");
// console.log("I like", favorites[0], "and", favorites[3]);

// for(let i = 1; i <= 7; i++){
//     console.log(i)
// }

// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// for (let i = 12; i<14; i++) {
//     for (let j = 5; j <=13; j++) {
//         console.log(j);
//     }
// }

// for(let i = 1; i <= 7; i++){
//     if(i === 2){
//         continue;
//     }
//     if(i === 4){
//         continue;
//     }
//     console.log(i)
// }

// console.log(5 % 2);

// let i = 1
// while(i<=10){
//     console.log(i);
//     i++;
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log( 7 % 2);

// for (let i = 10; i>=1; i--){
//     console.log(i)
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//     console.log(i * i);
// }

// let animals = ["cat", "dog", "rabbit", "parrot"];
// for (let i = 0; i < animals.length; i++){
//     console.log(animals[i]);
// }

// let names = ["Ali", "Sara", "John"];
// console.log("Hello,", names[0] + "!");

// let original = [1, 2, 3, 4];
// let doubled = [];
// for (let i = 0; i < original.length; i++) {
//   doubled.push(original[i] * 2);
// }
// console.log(doubled); 

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// let count = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     count++;
//   }
// }
// console.log("Odd numbers count:", count);

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log (i)
// }

// for (let i = 1; i <= 7; i++) {
//     if (i === 7){
//         break;
//     }
//     console.log(i)
// }

for (let i =1;  i <= 15; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

for (let i = 20; i >= 5; i--)
{
    console.log(i)
}

let sum = 0;
for (let i = 1; i <=10; i++) {
    sum += i;
}
console.log(sum);

let factorial = 1
for (let i = 1; i <= 5; i++) {
    factorial *= i
}
console.log(factorial);


for (i = 1; i <= 5; i++){
    console.log(2 ** i)
}

let colors = ["red", "blue", "green", "yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log("My favorite color is " + colors[i] + "!");
}

let words = ["apple", "banana", "cherry"];
for (let i = 0; i < words.length; i++) {
  console.log(words[i].toUpperCase());
}

let nums = [5, 10, 15, 20];
let halved = [];
for (let i = 0; i < nums.length; i++){
   halved.push(nums[i] / 2);
}
console.log(halved);

let names = ["Ali", "Beatrice", "John", "Alexandra"];
let longest = names[0];

for (let i = 1; i < names.length; i++) {
  if (names[i].length > longest.length) {
    longest = names[i];
  }
}
console.log("Longest name:", longest);