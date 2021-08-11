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


// * Редактирование элементов массивов

// ** Метод splice
// important: Позволяет удалять, добавлять и изменять элементы массива
// warning: метод splice изменяет исходный массив!

// *** удаление элемента

let party = ["Solo", "Dread", "Nexus"];
// party.splice(индекс, количество элементов)
party.splice(1,1);      // начиная с первой позиции удаляет 1 элемент
console.log(party);     // возвращает массив ["Solo", "Nexus"]

// warning: также можно использовать отрицательные значения метода splice

let party = ["Solo", "Dread", "Nexus"];
party.splice(-1, 1);    // начиная с первой позиции с конца удаляет 1 элемент
console.log(party);     // возвращает массив ["Solo", "Dread"]

// *** удаление элементов с сохранением их в переменную

let party = ["Solo", "Dread", "Nexus"];
let newParty = party.splice(1,1);   // начиная с первой позиции удаляет 1 элемент
console.log(newParty);              // возвращает ["Dread"]

// *** замена элемента массива другим элементом

let party = ["Solo", "Dread", "Nexus"];
// party.splice(индекс, количество заменяемых элементов, новый элемент)
party.splice(1,1,'NS');
console.log(party);             // возвращает ["Solo", "NS", "Nexus"]

// *** добавление элементов

let party = ["Solo", "Dread", "Nexus"];
// party.splice(индекс, 0 - означает добавление, новые элементы)
party.splice(1,0,'NS','Flash');     // начиная с первой позиции добавляет один элемент
console.log(party);                 // возвращает ['Solo', 'NS', Flash', 'Dread', Nexus'];

// ** Метод slice
// important: создает новый массив. в который дублирует часть изначального массива, либо весь массив

// *** копирование части массива

let party = ["Solo", "Dread", "Nexus"];
// party.slice(индекс начальной позиции, индекс конечной позиции не включая)
let newParty = party.slice(1,2);     // копирует начиная с первой позиции до второй позиции не включая
console.log(newParty);              // возвращает ["Dread"]

// warning: можно использовать отрицательнгые значения, отсчет будет идти справа налево

let party = ["Solo", "Dread", "NS", "Nexus"];
let newParty = party.slice(1, -1);      // копирует начиная с первой позиции до последней позиции не включая
console.log(newParty);                  // возвращает ["Dread", "NS"]

// *** копирование всего массива

let party = ["Solo", "Dread", "Nexus"];
let newParty = party.slice();       // не принимает никаких значений, полностью дублирует массив
console.log(newParty);              // возвращает ["Solo", "Dread", "Nexus"]

// ** Метод concat
// important: создает дубль массива, может дополнять новыми значениями

let party = ["Solo", "Dread", "Nexus"];
let newParty = party.concat("Flash");   // создает новый массив, копируя все значения и добавляя новое в конец
console.log(newParty);                  // возвращает ["Solo", "Dread", "Nexus", "Flash"]

// important: аналогичный результат, но с испозьванием spread

let newParty = [...party, "Flash"];
console.log(newParty);                  // возвращает ["Solo", "Dread", "Nexus", "Flash"]

// ** Метод sort
// important: сортирует массив, меняя в нем порядок элементов

let party = ["Solo", "Dread", "NS", "Nexus"];
console.log(party.sort());          // возвращает ["Dread", "Nexus", "NS", "Solo"]

// warning: для сортировки можно использовать стрелочную функцию

let numberArray = [1,4,2,5,3];
console.log(numberArray.sort((a, b) => a - b));

// ** Метод reverse
// important: меняет порядок в массиве на обратный

let party = ["Solo", "Dread", "NS", "Nexus"];
console.log(party.reverse());           // возвращает ["Nexus", "NS", "Dread", "Solo"]


// ** Метод map
// important: вызывает функцию для каждого элемента массива и возвращает НОВЫЙ МАССИВ (и ничего больше) с результатом выполнения функции

let party = ["Solo", "Dread", "NS", "Nexus"];
// party.map((элемент массива, индекс, сам массив) => {});

let newArray = party.map(item => item[0]);      // возвращает первую (0 индекс) букву каждого элемента массива
console.log(newArray);                          // возвращает ["S", "D", "N", "N"]

// ** Методы split и join

// *** split("")
// important: преобразует строку в массив по заданному разделителю

let stringParty = "Solo,Dread,Nexus";       // строка из слов, разделенных друг от друга запятой ,
let arrayParty = stringParty.split(",");    // запятая , является разделителем
console.log(arrayParty);                    // возвращает массив ["Solo", "Dread", "Nexus"]

// warning: можно ограничить количество элементов, которые попадут в массив

let stringParty = "Solo,Dread,Nexus";
let arrayParty = stringParty.split(",", 2); // запятая, является разделителем, 2 элемента попадут в новый массив
console.log(arrayParty);                    // возвращает массив ["Solo", "Dread"]

// *** join("")
// important: проеобразует массив в строку с заданным разделителем

let arrayParty = ["Solo", "Dread", "Nexus"];
let stringParty = arrayParty.join(";");     // точка с запятой является разделителем
console.log(stringParty);                   // возвращает строку "Solo;Dread;Nexus"

// * Проверка
// warning: массив не является отдельным типом данных, значит typeof выдаст тип object
// important: проверить, что массив является массивом можно с помощью Array.isArray();

let party = ["Solo", "Dread", "Nexus"];
if (Array.isArray(party)) {
    console.log("Это массив");
} else {
    console.log('404');
};

// * Перебор элементов массива

// ** Цикл for
let party = ["Solo", "Dread", "Nexus"];
for(let i = 0; i < party.length; i++) {     // возвращает значение каждого элемента массива, пока i меньше длины массива
    console.log(party[i]);                  // поочередно возвращает Solo Dread Nexus
};

// ** Цикл for of
// important: используется для вывода значений массива
let party = ["Solo", "Dread", "Nexus"];
for(let partyItem of party) {               // возвращает значение каждого элемента массива
    console.log(partyItem);                 // поочередно возвращает Solo Dread Nexus
};

// ** метод forEach
// important: выполняет функцию для каждого элемента массива
let party = ["Solo", "Dread", "Nexus"];
// party.forEach((элемент массива, индекс, сам массив) => {})
party.forEach((item, index, array) => {
    console.log(`${item} имеет ${index} в ${array}`);
});

// * Метод filter
// important: позволяет фильтровать по заданному условию исходный массив
// todo: отфильтровать массив и оставить только объекты, где возраст равен 22

let party = [
    { name: 'Dread', age: 18 },
    { name: 'Solo', age: 25 },
    { name: 'NS', age: 22 },
    { name: 'Nexus', age: 17 },
    { name: 'Flash', age: 22 },
    { name: 'Dandy', age: 23 },
];

// party.filter(function(элемент массива, индекс, сам массив) {})

const filteredParty = party.filter(function(person, index, array) {
    if (person.age === 22) {
        return true;
    };
});
const filteredParty = party.filter(function(person, index, array) {
    return person.age === 22;
});
// warning: запись можно упростить с использованием стрелочной функции
const filteredParty = party.filter(person => person.age === 22);

// * Метод reduce
// important: позволяет вычислить единое значение на основе всего массива

// todo: вычислить суммарный age всех персонажей

let party = [
    { name: 'Dread', age: 18 },
    { name: 'Solo', age: 25 },
    { name: 'NS', age: 22 },
    { name: 'Nexus', age: 17 },
    { name: 'Flash', age: 22 },
    { name: 'Dandy', age: 23 },
];
// party.reduce((начальное значение, элемент массива, индекс, сам массив) => {}, начальное значение);
const totalAge = party.reduce((total, person, index, array) => {
    return total += person.age;             // возвращает 127;
}, 0);

// warning: запись можно упростить с использованием стрелочной функции
const totalAge = party.reduce((total, person) => total += person.age, 0);

// * Метод find
// important: обеспечивает поиск в массиве объектов с определенным условием
// important: возвращает первый попавшщийся элемент, удовлетворяющий условию

// todo: найти первого персонажа с возрастом 17

// party.find((элемент массива, индекс, сам массив) => {})
const youngPerson = party.find(person => person.age === 17);
console.log(youngPerson);               // возвращает объект { name: 'Nexus', age: 17 }

// * Метод findIndex
// important: обеспечивает поиск в массиве с определенным условием
// important: возвращает индекс первого попавшегося элемента, удовлетворяющего условию

// party.findIndex((элемент массива, индекс, сам массив) => {})
const youngPerson = party.findIndex(person => person.age === 17);    // возвращает индекс первого попавшегося персонажа с возрастом 17
console.log(youngPerson);               // возвращает индекс 3