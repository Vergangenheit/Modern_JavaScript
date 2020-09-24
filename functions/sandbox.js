// function declaration
// function greet(){
//     console.log('hello there');
// }

//function expression
// const speak = function(name='mario'){
//     console.log(`good day ${name}`);
// };

//speak();

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// console.log(calcArea(5));

//arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };
// console.log(calcArea(5));

// callbacks & foreach
// it's functions that receive another function as argument
// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(function(value){
//     console.log(value);
// });

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun', 'li'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


