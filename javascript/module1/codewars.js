// function pillars(numPill, dist, width) {
//   if (numPill === 1){
//     return 0;
//   } else if (numPill > 1 && (dist > 10 && dist < 30) && (width > 10 && width < 50)){
//     return (((numPill - 2) * width) + ((numPill - 1) * (dist * 100)));
//   }
// }

// console.log(pillars(2, 20, 25));

// console.log(pillars(11, 15, 30));

// function solution(number){
//   let sum = 0;

//   if(number < 0){
//     return 0;
//   }

//   for (let i = 0; i < number; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(solution(10));


// function squareDigits(num){
//   let str = num.toString();
//   let numArr = str.split("");
//   let sqArr = [];
  
//   for (i = 0; i <= numArr.length - 1; i++){
//     sqArr.push((numArr[i])*(numArr[i]));
//   }
  
//   let newStr = sqArr.join("");
//   let newNumber = Number(newStr);
//   return newNumber;
// }

// console.log(squareDigits(9119));



// function accum(s) {
// 	let arr = s.split("");
//   let block = [];
//   let newArr = [];

//     for(let i = 0; i <= arr.length - 1; i++){
//         let block = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
//         newArr.push(block);
//         longStr = newArr.join("-");

//     }
  
//     return longStr;
// }

// console.log(accum("ZpglnRxqenU"));


// function booleanToString(b){
//     let str = b.toString();
//     return str;
// }
// console.log(booleanToString(true));

function XO(str) {
   let arr = str.split("");
   let totalX = 0;
   let totalO = 0;

   for (let i = 0; i < arr.length; i++){
    if (arr[i] === "X" || arr[i] === "x"){
      totalX += 1;
    } else if (arr[i]=== "O" || arr[i] === "o"){
    totalO += 1;
    }
}
return totalO === totalX
}

console.log(XO("xxoOOxxfo"));