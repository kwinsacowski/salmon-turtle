//6
function rangeSum(start, end, step){
  let sum = 0;
  if( step <= 0 || end < start){
    return "INVALID";
  } else for (let i = start; i <= end; i+=step){
 sum += i
  } 
  return sum;
}

console.log(rangeSum(5, 10, 2));

//7
function filterLessThan(arr, threshold) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < threshold) result.push(arr[i]);
  }
  return result;
}

//1
function productMultiples(n, m){
  if(n <= 0 || m <=0){
    return "INVALID";
  } else for (let i = n; i <= m; i+=n){
    if ()
  }
}