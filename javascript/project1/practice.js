for (let i = 1; i <= 15; i++){  
    if(i % 2 === 1)
        console.log(i)
}

for (let i = 5; i <= 30; i += 5){
        console.log(i)
}


let table = []
for (let i = 1; i <=10; i++){
    table.push(i * 10);
}
console.log(table)

let min = 50;
let max = 100;
console.log(max - min);

let fruits = ["apple", "orange", "grape", "pear"];
for (let i = 0; i < fruits.length; i++){
    console.log("I like " + fruits[i])
}

// // 7
// let words = ["hello", "world", "JavaScript", "fun"];
// for (let i = 0; i < words.length; i++){
//     console.log(words[i] + " - " + words[i].length);
// }

// let numbers = [2, 4, 6, 8];
// let newArr = []
// for (let i = 0; i < numbers.length; i++) {
//     newArr.push(numbers[i] * 2 + 1);
// }
// console.log(newArr);

let singers = ["Adele", "Beyonce", "Drake", "Ed Sheeran"];
for (i = singers.length - 1; i >= 0; i--){
    console.log(singers[i])
}

let nums = [3, 45, 12, 99, 23, 7];
let biggest = nums[0];
for (i = 1; i < nums.length; i++){
    if(nums[i] > biggest ) {
        biggest = nums[i];
    }
}
console.log(biggest);

//1
let numArr = []
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0)
    numArr.push(i);
}
console.log(numArr);

//2
let sqArr = []
for (let i = 1; i <=10; i++){
    sqArr.push(i * i);
}
console.log(sqArr)

//3
let names = ["Ali", "Sara", "John"];
let nameArr = []
for (let i = 0; i < names.length; i++){
    nameArr.push("Hello, " + names[i] + "!");
}
console.log(nameArr)

//4
let words = ["cat", "giraffe", "elephant", "dog"];
let len = []
for (let i = 0; i < words.length; i++){
    len.push(words[i].length);
}
console.log(len);

//5
let numbers = [5, 10, 15, 20];
let sum = numbers[0]
for (let i = 1; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum);

//6
let doubles = [];
for (let i = 1; i <= 15; i++){
    if(i % 2 !== 0) {
    doubles.push(i * 2);
    }
}
console.log(doubles);

//7
let sevens = [];
let sevArr = [];
for (let i = 0; i <=10; i++){
    sevens.push(i * 7);
    sevArr.push("7 *" + i + "=" + sevens[i]);
}
console.log(sevArr)

let animals = ["dog", "hippopotamus", "lion", "elephant"];
let longest = animals[0]
for ( let i = 1; i < animals.length; i++){
    if(animals[i].length > longest.length) {
        longest = animals[i];
    }
}
console.log(longest)