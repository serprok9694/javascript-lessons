// * Объявление функции (Function declaration)
// important: Вызвать таккую функцию можно как до, так и после объявления самой функции!!!

// function(параметр, параметр, ...) { тело функции }

function showMessage(myName, myMessage) {                           // объявление функции
    console.log(`${myName}, ${myMessage} my friend`);               // вывод приветствия
    // console.log(myName + ", " + myMessage + " my friend");
}

showMessage('Laura', 'hello');                                       // вызов функции

// warning: переменная, объявленная внутри функции называется локальной, за пределами своей функции она не видна

const myAge = 33;  
function showAge() {
    const myAge = 22;               // объявление локальной переменной
}
console.log(myAge);                 // Ошибка 'myAge is not defined'


// * Директива return
// important: Директива return используется для вывода результата работы функции

// important: когда код встречает return, функция возвращает результат и код дальше не выполняется

// * Функциональное выражение (function expression)
// important: вызвать такую функцию можно только после ее объявления!

const showAge = function(age) {
    console.log(`My age is ${age}`);
}

showAge(18);            // возвращает строку `My age is 18`


// * Стрелочная функция (arrow function)

// const имя переменной = (параметр, параметр, ...) => тело функции
const showMessage = (myName, myMessage) => `${myName}, ${myMessage} my friend`;     // => заменяет собой директиву return

console.log(showMessage('Waydi', 'hello'));         // возвращает строку `Waydi, hello my friend`

// warning: для многострочной функции нужны фигурные {} скобки и директива return

const showMessage = (myName, myMessage) => {
    return `${myName}, ${myMessage} my friend`;
};

console.log(showMessage('Waydi', 'hello'));         // возвращает строку `Waydi, hello my friend`