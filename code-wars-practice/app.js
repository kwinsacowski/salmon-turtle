function reverseWords(str) {
 let words = str.split(' ');
 let reversedWords = words.map(word => word.split('').reverse().join(''));
 return reversedWords.join(' '); 
}
console.log(reverseWords("Hello World"));

function longest(s1, s2) {
    let combined = s1 + s2;
    let uniqueChars = combined.split("");
    uniqueChars = [...new Set(uniqueChars)];
    uniqueChars.sort();
    combined = uniqueChars.join("");
    return combined;
}

console.log(longest("aretheyhere", "yestheyarehere"));

function repeatStr (n, s) {
  let arr = [];
    arr.push(s);
    return arr.join('').repeat(n);
  }
  
console.log(repeatStr(6, "I"));

function areYouPlayingBanjo(name) {
  let arr = name.split("");
  if ((arr[0] === "R") || (arr[0] === "r")){
      return name + " plays banjo";
      } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Kayla"));

// function positiveSum(arr) {
//   let posArr = [];
//   for (let i = 0; i < arr.length ; i++){
//     if (arr[i] > 0){
//       posArr.push(arr[i]);
//     }
//   }
//   let sum = 0;
//   for (let j = 0; j < posArr.length; j++){
//     sum += posArr[j];
//   }
//   return sum;
// }
// console.log(positiveSum([]));

function fakeBin(x){
  let arr = x.split ("");
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 5){
      arr[i] = 0;
    } else if (arr[i] >= 5){
      arr[i] = 1;
    }
  }
  let binary = arr.join ("");
  return binary;
}
console.log(fakeBin("45385593107843568"));