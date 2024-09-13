//Задание 1
function greeter (name) {
  return `Hi, ${name}!`}
//Задание 2
let multiply = function(5, 6) {
    return 5 * 6;
}
//Задание 3
(function() {
    alert("Анонимная функция вызвана!");
})(); 
//Задание 4
(function() {
    console.log( "IIFE выполнена")
  })();
//Задание 5
function outer() {
    function inner() {
        alert( "Внутренняя функция");
    }
    let message = outer();

    }

//Задание 6
let person = {
    name: "Вася"
  };
  
  function sayName() {
    alert(this.name);
  }
  
  let sayNamePerson = sayName.bind(person);
  sayNamePerson();
//Задание 7

function counter() {
    let count = 0;
    function increaseCount() {
        count++;
    }
  
    return increaseCount;
  }
  
  let count = counter();
  count();
  count();
//Задание 8
const execute = () => {
    const multiply = (2, 5) => 2 * 5;
    return multiply;
};
const multiply = execute();
multiply(2, 5);