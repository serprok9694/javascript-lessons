undefined
null
Boolean
Number
BigInt
String
Symbol
Object
Function

// * undefined
// Неопределенный тип
// important: Переменная вернет undefined, если она была объявлена, но не определена

let userName;                       // переменная объявлена, но не определена(не присвоено значение)
console.log(typeof userName)        // возвращает тип данных undefined
console.log(userName)               // возвращает значение undefined

// * Null
// Представляет собой ничего, или пустое место
// important: переменная, возвращающая null определена, но ее значение пустое
// important: Тип данных null содержит только одно значение - null
// warning: оперетор typeof переменной со значением null возвращает тип данных

// * Boolean 
// Логический (булевый) тип данных
// important: Тип данных boolean может принимать два значения - true (истина) или false (ложь)

let trueOrFalse = 60 < 10;
console.log(trueOrFalse)            // возвращает false, условие ложное

// important: можно использовать для проверки
let willYouMarryMe;             // переменная объявлена и является true
if (willYouMarryMe) {           // если условие willYouMarryMe выполнятеся, возвращается true
    console.log('Yes');
} else {
    console.log('No')
}

// * Number
// Числовой тип данных
// important: тип данных тumber может принимать целые числа и числа и плавающей запятой
let myAge = 22;
let myHeight = 1.79;
// warning: специальные значения infinity и -infinity
let getInfininty = 58 / 0;
let getMinusInfinity = -58 / 0;

console.log(getInfininty)           // возвращает значение infinity
console.log(typeof getInfininty)    // возвращает number
// warining: Специальное значение NaN (not a number)
// результат неправильной математической операции

let getNan = 'string' / 10          // деление строки на число
console.log(getNan)                 // возвращает NaN
console.log(typeof getNan)          // возвращает number

// important: NaN уникальное значение и никогда не равно NaN:
console.log(NaN === NaN)            // возвращает false

// * BigInt
// числовой тип данных, может содержать числа произвольной длины
// important: правила синтаксиса: к числовому литералу добавляется символ n в конце
const bigInteger = 12345678987654321234n;

// * String
// строковый тип данных
// important: чтобы переменная вернула тип данных string, ее значение должно быть заключено в кавычки
// warning: одинарные '' и двойные "" кавычки являются простыми. Между ними нет разницы в синтаксисе

let myFullName = 'Ivanov Ivan'      // знчаение переменной заключено в одинарные кавычки
console.log(myFullName);            // возвращает Ivanov Ivan
console.log(typeof myFullName)      // возвращает string

let myFullName = "Ivanov Ivan"      // знчаение переменной заключено в двойные кавычки
console.log(myFullName);            // возвращает Ivanov Ivan
console.log(typeof myFullName)      // возвращает string

// warning: обратные `` кавычки позволяют встраивать в строку дополнительный функционал
let myAge = 22;
let myName = 'Ivan';
console.log(`Hello, I'm ${myName}, my age is ${myAge}`);        // возвращает строку Hello, I'm Ivan, my age is 22


// * Object
// Объект содержит более сложную структуру данных
// important: объект может быть создан с помощью фигурных скобок {} и содержит набор необязательных свойств
// important: свойство состоит из пары - ключ: значение, запятыми отделяются свйоства между собой

let myInfo = {
    name: 'Ivan',
    age: 22
}
console.log(myInfo)                 // возвращает { name: 'Ivan', age: 22 }
console.log(typeof myInfo)          // возвращает object

// * Преобразование типов
// ** Строковое преобразование
// important: с помощью специальной функции String() можно изменить тип данных на строковый

let myAge = 22;             // тип данных number
let myTrue = true;          // тип данных boolean

console.log(myAge);         // возвращает 22 типа number
console.log(myTrue);        // возвращает true типа boolean

myAge = String(myAge);      // преобразует тип данных в string
myTrue = String(myTrue);    // преобразует тип данных в string 

сonsole.log(myAge)          // возвращает 22 типа string
сonsole.log(myTrue)          // возвращает true типа string

// ** Численное преобразование
// important: с помощью функции Number() омжно изменить тип данных на числовой

let myAge = '22';           // тип данных string
console.log(myAge);         // возвращает строку 22

myAge = Number(myAge);  // преобразует строковый тип данных в числовой
myAge = +myAge;         // короткий вариант записи преобразования в числовой тип данных

// warning: если в строке нет чисел, результатом будет NaN

let myName = 'Ivan';        // тип данных string
myName = Number(myName)     // преобразует строковый тип данных в числовой
console.log(myName)         // возвращает NaN
console.log(typeof myName)  // возвращает number

// * Логическое преобразование
// important: С помощью специальной функции Boolean() можно изменить тип данных на логический

let myAge = 22;             // тип данных number, положительное число вернет true
let myAge = 0;              // тип данных number, Число 0 вернет false
let myAge = '0';            // тип данных string, строка '0' вернет true
let myAge = '';             // тип данных string, строка вернет false
let myAge = ' ';            // тип данных string, вернет true, тк строка не пустая     

myAge = Boolean(myAge);
console.log(myAge);
