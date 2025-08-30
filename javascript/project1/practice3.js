//1
for (let i = 1; i <= 20; i++)
    if(i % 5 === 0){
    console.log("Fizz")
} else {console.log(i)
}

//2
for (let i = 1; i<=10; i++){
    if(i % 2 === 0)
        console.log("Even");
 else {
    console.log("Odd");
  }
}

//3
 for (let i = 1; i<=30; i++){
    if(i > 20)
        console.log(i);
 }

//4
let names = ["Ali", "Beatrice", "John", "Alexandra", "Tom"];
for(let i = 0; i <names.length; i++){
    if (names[i].length <= 3)
        console.log(names[i]);
}

//5
let scores = [55, 78, 92, 43, 88, 60];
for (let i = 0; i < scores.length; i++){
    if(scores[i] >= 60){
        console.log("You passed!");
    } else {
        console.log("You failed.");
    }
}

//6
let numbers = [3, 15, 7, 42, 29, 2];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 10)
        console.log(numbers[i]);
}

//7
 for (let i = 1; i<=30; i++){
    if(i % 2 === 0 && i % 3 === 0)
        console.log(i);
 }

 //8
  for (let i = 1; i<=15; i++){
    if (i =10){
        continue;
  }
  console.log(i);
  }
