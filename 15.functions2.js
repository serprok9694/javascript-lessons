// * Рекурсия
// Рекурсия - это прием программирования, полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных,
// но более простых задач. Или когда задача может быть упрощена до несложныйх действий.

// Рекурсивной функцией обычно называют функцию, которая вызывает сама себя, например:

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    };
};


// * Замыкание
// Замыкание - это функция, которой доступны переменные из области видимости другой функции
// обычно для создания замыкания одну функцию определяют внутри другой

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
};
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());

// замыкание всегда получает последнее значение любой переменной из внешней функции


// * setTimeout
// setTimeout позволяет вызвать функцию один раз через определенный интервал времени

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
};
setTimeout(sayHi, 1000, 'Hi', 'Jhon');
setTimeout(() => alert('Hi'), 1000);

// * clearTimeout

// вызов setTimeout возвращает идентификатор таймера timerId , который можно использовать для отмены дальнейшего выполнения
let timerId = setTimeout(() => {});
clearTimeout(timerId);

// * setInterval

// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('Tick'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => {
    clearInterval(timerId);
    alert('Stop!');
}, 5000);


// Задача 1
// Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд

const printMessage = (n) => {
    setInterval(() => alert('hi'), n * 1000);
};

// Задача 2
// Напишите функцию, которая выводит через 5 секунд на экран сообщение "прошло 5 секунд"

const fiveSeconsAgo = () => {
    setTimeout(() => console.log('прошло 5 секунд'), 5000);
};

// Задача 3 
// Напишите функцию printNumbers(from, to) котоаря выводит число каждую секунду, начиная от from и заканчивая to

const printNumbers = (from, to) => {
    let current = from;
    setTimeout(function go(){
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        };
        current++;
    }, 1000);
};

printNumbers(2, 8);

// * Call, apply
// оба метода вызывают функцию с конкретным аргументом this, задавая значение объекта this в теле функции
// метод apply() принимает два аргумента: значение this внутри функции и массив аргументов

// sum.call(this, arg1, arg2);
// sum.apply(this, [arg1, arg2]);

// ** Call

function sayHi() {
    alert(this.name);
};
let user = { name: 'John' };
let admin = { name: 'Admin' };

sayHi();            // возвращает undefined
sayHi.call(user);   // возвращает John
sayHi.call(admin);  // возвращает Admin

// ** Apply

// единственная разница в синтаксисе между call и apply состоит в том, что call ожидает список аргументов, 
// в то время как apply принимает псевдомассив