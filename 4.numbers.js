// * Запись числа
// important: тип данных number может принимать целые числа и числа с плавающей точкой

let myAge = 22;
let myHeight = 1.79;

// important: большие числа можно разделять нижним подчеркиванием _ для большей читабельности

let number = 1_000_000;         // возвращает число 1000000

// * Округление числа
// ** Math.floor
// important: округляет число в МЕНЬШУЮ сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);            // возвращает число 5
console.log(numTwo);            // возвращает число 2
console.log(numThree);            // возвращает число -3

// ** Math.ceil
// important: окгруляет число в БОЛЬШУЮ сторону

let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);            // возвращает число 6
console.log(numTwo);            // возвращает число 3
console.log(numThree);            // возвращает число -2

// ** Math.round
// important: окгруляет число для БЛИЖАЙШЕГО целого

let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);            // возвращает число 6
console.log(numTwo);            // возвращает число 2
console.log(numThree);            // возвращает число -2

// ** Метод toFixed(n)
// important: округляет число до n знаков после запятой, но возвращает СТРОКОВЫЙ результат

let numOne = 5.845;

console.log(numOne.toFixed(1))      // возвращает строку 5.8
console.log(+numOne.toFixed(1))     // возаращет число 5.8

// ** Функция isNaN
// important: проверяет выражение на значение NaN. Возвращает true или false

// сложение числа со строкой возвращает NaN:
console.log(isNaN(38 + 'попугаев'));    // возвращает true
console.log(isNaN('попугаев' + 38));    // возвращает true