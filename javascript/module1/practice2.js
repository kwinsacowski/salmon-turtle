
//1
let multiples = []
for (let i = 1; i <= 30; i++){
    if (i % 5 === 0)
    multiples.push(i);
}
console.log(multiples);

//2
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sqArr = []
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
        sqArr.push(nums[i] * nums[i]);
    }
}
console.log(sqArr)

//3
let names = ["Ali", "Beatrice", "John", "Alexandra"];
let leng = [];
for (let i = 0; i < names.length; i++){
    leng.push(names[i].length);
}
console.log(leng);

//4
let newArr = []
for (let i = 1; i <= 20; i++) {
    if (i * 2 < 25){
    newArr.push (i * 2); 
    }
}
console.log(newArr);

//5
let newRev = [];
for (let i = 30; i > 0; i--){
    if(i % 3 === 0){
        newRev.push(i);
    }
}
console.log(newRev);


//6
for (let i = 1; i <= 15; i++) {
    if(i % 2 !== 0)
        continue;
    console.log(i)
}

//7
for (let i = 1; i <= 50; i++){
    if(i % 4 !== 0)
        continue;
    if(i % 6 !== 0)
        continue;
    console.log(i)
 }

 //8
let counts = 0;
 for (let i = 1; i <= 100; i++){
    if(i % 7 === 0){
        counts++;
    }
}
console.log(counts);

//9
for (let i = 1; i <= 100; i++){
    if( i % 13 === 0){
        console.log(i)
        break;
    }
}

//10
let primeCount = 0;
for (let i = 2; i <= 50; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeCount++;
  }
}
console.log("Number of primes:", primeCount); // 15


let items = ["sword", "shield", "potion", "map"];
for (let i = 0; i < items.length; i++) {
  if (items[i] === "potion") {
    console.log("Potion found!");
    break;
  }
}