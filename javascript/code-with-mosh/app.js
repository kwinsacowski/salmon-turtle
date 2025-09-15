let nam = 'Kayla'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal (true or false)
let firstName; //undefined
let lastName = null; //null (clear the value of a variable)

typeof nam;
console.log(typeof nam);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof lastName);

//objects
let person = {
    name: 'Kayla Dawn',
    age: 28
};

//dot notationn
person.age = 29;

//bracket notation
let selection = 'age';
person[selection] = 28;
console.log(person.age);


let selectedColors = [];
selectedColors.push('red');
selectedColors.push('blue');
selectedColors.push('green');
let newColors = selectedColors.join(', ');
console.log(selectedColors);
console.log(newColors);

var number = function(busStops){
  let people = 0;
  for (let i = 0; i < busStops.length; i++){
    let currentStop = busStops[i];
    let on = currentStop [0];
    let off = currentStop [1];
    people += on;
    people -= off;
  }
  return people;
}

console.log(number([[10,0],[3,5],[5,8]]));

