// * let
// Объявление переменной с помощью ключевого слова let

// important: Имя переменной может содержать только буквы, цифры и символы $ и _
// important: Первый символ не должен быть цифрой, нельзя использовать зарезервированные слова

let age;
let myAge123;
let $age;
let _color;

// error: Неверное объявление переменной:
// let 123info;
// let my-age#;
// let let;
// let break;

// * const
// Объявление констант
const myAge = 15;

// * CamelCase - горбатый регистр
// Каждое новое слово кроме первой буквы первого слова начинается с заглавной буквы

let myFullName;
let myLifeStyle;

// Присваивание значений переменной
let myFullName;                     // объявление без присваивания
myFullName = 'Ivanov Ivan'          // присваивание значения переменной
let myFullName = 'Ivanov Ivan'      // объявление с присваиванием

// Изменения значения перпеменной
let myAge = 22;
myAge = 18;

// Область видимости переменной
// important: Область видимости переменной находится в переделах блока инструкций {}

function showMyAge() {          // блок инструкций
    let myAge = 18;             // переменная определена внутри блока. Область видимости переменной также находится вунутри блока
    console.log(myAge);         // возвращает 18
}
console.log(myAge);             // Ошибка 'myAge' is not defined

// warning: если переменная внутри и за переделами блока имеет одно и то же название, они работают отдельно друг от друга

let myAge = 22;                 // переменная объявлена за пределами блкоа инструкций
function showMyAge() {
    let myAge = 18;             // переменная объявлена внутри блока инструкций, область видимости ограничена
    console.log(myAge);
}
console.log(myAge);

