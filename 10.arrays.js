// * Объявление массива

let newArray = new Array();
let newArray = [];

// * Синтаксис
// important: заполняется массив значениями (элементами) через запятую:

let simpleArray = [1, 2, 3];

let newArray = [
    1,
    2,
    3,
    '4',
    '5',
    true,
    false,
    function () {
        console.log('Hello world!');
    }
];

// * Получение значения

let newArray = [
    'Solo',         // 0я позиция
    'Dread',        // 1я позиция
    'Nexus',        // 2я позиция
    'NS',           // 3я позиция
];

console.log(newArray[0]);   // возвращает Solo
console.log(newArray[3]);   // возвращает NS
console.log(newArray[15]);  // возвращает undefined

// * Длина массива
// important: длина массива равна количеству элементов

let newArray = [
    'Solo',
    'Dread',
    'Nexus',
    'NS',
];

console.log(newArray.length);   // возвращает 4 (т.к. 4 элемента)

// * Доступа к массиву

// ** spread - оператор для копирования значения другого массива

const firstArray = [1,2,3,4];

// warning: При присваивании массиву другой массив, копируется ссылка на него, а не его значение

const secondArray = firstArray;     // присваивает ссылку на значение исходного массива. При изменении secondArray будет изменяться и firstArray

// important: для того, чтобы скопировать значение исходного массива, а не его ссылку, используется spread-оператор

const thirdArray = [...firstArray];     // spread - оператор. Копирует значение исходного массива firstArray


// * Редактирование массива
// ** изменение значений

let newArray = [
    'Solo',         // 0я позиция
    'Dread',        // 1я позиция
    'Nexus',        // 2я позиция
    'NS',           // 3я позиция
];
newArray[3] = 'Flash';
console.log(newArray);      // возвращает ['Solo', 'Dread', 'Nexus', 'Flash']

// ** добавление значений

newArray[4] = 'Хвост';
console.log(newArray);      // возвращает ['Solo', 'Dread', 'Nexus', 'Flash', 'Хвост']

// * методы массивов
// ** push - добавление эдемента в конец массива
let party = ['Solo', 'Dread', 'Nexus'];
party.push('NS');       // добавляет в конец массива 'NS'
console.log(party);     // возвращает ['Solo', 'Dread', 'Nexus', 'NS']

// ** shift - удаление первого элемента в массиве
// important: второй элемент становится первым
let party = ['Solo', 'Dread', 'Nexus'];
party.shift();
console.log(party);     // возвращает ['Dread', 'Nexus']

// ** pop - удаление последнего элемента в массиве 
let party = ['Solo', 'Dread', 'Nexus'];
party.pop();
console.log(party);     // возвращает ['Solo', 'Dread']

// ** unshift - добавление элемента в начало массива
let party = ['Solo', 'Dread', 'Nexus'];
party.unshift('NS', 'Flesh');
console.log(party);     // возвращает ['NS', 'Flesh', 'Solo', 'Dread', 'Nexus']

// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено
// find([1,2,3,4,5], 4);