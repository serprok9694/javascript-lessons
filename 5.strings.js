// * Запись строки
// important: чтобы переменная вернула тип данных string, ее значение должно быть заключено в кавычки

// warning: обратные кавычки `` позволяют встраивать в строку дополнительный функционал

let myName = 'Ivan'
let myAge = 22;
console.log(`Hello, Im ${myName}, my age is ${myAge}`);

// * Строковое преобразование
// important: с помощью специальной функции String() можно изменить тип данных на строковый

let myAge = 22;                     // тип данных number
let myTrue = true;                  // тип данных boolean
console.log(myAge);                 // возвращает число 22
console.log(typeof myAge);          // возвращает number
console.log(myTrue);                // возвращает true
console.log(typeof myTrue);         // возвращает boolean

myAge = String(myAge);
myTrue = String(myTrue);

console.log(myAge);                 // возвращает строку 22
console.log(typeof myAge);          // возвращает string
console.log(myTrue);                // возвращает строку true
console.log(typeof myTrue);         // возвращает string

// * Работа с символами строки
// ** Свойство length
// important: позволяет получить длину строки, возвращает количество символов

let parrot = '38 попугаев';
console.log(parrot.length)      // возвращает число 11

// ** Получение символа по индексу
// important: индексация символов начинается с 0

let parrot = '38 попугаев';
console.log(parrot[3])          // возвращает 'п'

// important: если нужно получить последний символ в строке произвольной длины:

let parrot = '38 попугаев';
console.log(parrot[parrot.length - 1])  // возвращает 'в'

// * Изменение регистра
// important: .toUpperCase() позволяет изменить регистр на верхний

let parrot = '38 попугаев';
console.log(parrot.toUpperCase());      // возвращает '38 ПОПУГАЕВ'

// important: .toLowerCase() позволяет изменить регистр на нижний

let parrot = '38 ПоПугаев';
console.log(parrot.toLowerCase());      // возвращает '38 попугаев'


// * Поиск в строке
// ** .indexOf(substring, position)
// important: .indexOf(текст подстроки, позиция). Возвращает -1 если совпадений не найдено

let parrot = '38 попугаев';
console.log(parrot.indexOf('попуг')) ;   // возвращает 3 (3 - позиция, с которой начинается совпадение)

console.log(parrot.indexOf('попуг', 6));    // возвращает -1 (совпадений, начиная с 6ой позиции не найдено)

// ** .includes(subsctring, position)
// important: .includes(текст подстроки, позиция) Возвращает true если есть совпадение, false если совпадений нет

let parrot = '38 попугаев';
console.log(parrot.includes('попуг'));  // возвращает true
console.log(parrot.includes('попуг', 6));   // возвращает false (начиная с 6ой позиции совпадений не найдено)

// ** Метод slice
// important: slice(start, end) возвращает строку со start до end (не включая)

let parrot = '38 попугаев';
console.log(parrot.slice(3));       // возвращает подстроку 'попугаев'
console.log(parrot.slice(1, -1));   // возвращает подстроку '8 попугае'