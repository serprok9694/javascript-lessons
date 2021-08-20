// * Объявление объекта

let newObject = new Object();           // синтаксис "Конструктор объекта"
let newObject = {};                     // синтаксис "Литерал объекта"

// * Синтаксис
// Объект содержит более сложную структуру данных
// important: объект может быть создан с помощью фигурных скобок {} и содрежит набор необязательных свойств
// important: свойство состоит из пары - ключ: значение. Запятыми , отделяются свойства между собой

let person = {
    name: 'Ivan',
    age: 18,                    // свойство объекта, где age: - ключ, 18 - значение
    loveMusic: true,
    // "love music": true,         // ключ, состоящий и нескольких слов, заключается в кавычки
};

console.log(person);            // возвращает объект 
console.log(typeof person)      // возвращает тип данных object

// * Обращение к свойствам объекта

let person = {
    name: 'Ivan',
    age: 18,
    "love music": true,
};

console.log(person.name);               // обращение к свойству с ключом из одного слова. Возвращает Ivan
console.log(person["love music"]);      // обращение к свойству с ключом из нескольких слов. Возвращает true

// * Вложенность

let person = {
    name: 'Ivan',
    age: 18,
    "love music": true,
    address: {
        city: 'Minsk',
        country: 'Belarus',
    },
};

console.log(person.address.city);       // доступ к свойству объекта внутри другого объекта. Возвращает строку Minsk

// * Изменение объекта
// ** Добавление свойства

let person = {
    name: 'Ivan',
};
// important: чтобы добавить свойство в объект необходимо обратиться к объекту и через точку . добавить новое свойство
person.age = 22;

console.log(person);        // возвращает объект { name: 'Ivan', age: 22 }

// important: таким же способом можно добавить объект внутрь объекта

person.address = {
    city: 'Minsk',
    country: 'Belarus',
};
console.log(person);        // возвращает объект { name: 'Ivan', age: 22, address: { city: 'Minsk', country: 'Belarus'} }

// ** Удаление свойства

let person = {
    name: 'Ivan',
    age: 18,
    "love music": true,
};

// important: для удаления свойства из объекта используется delete:
delete person['love music'];        // удаляет из объекта свойство 'love music': true
delete person.nameж                 // удаляет из объекта свойство name: 'Ivan

console.log(person);                // возвращает объект { age: 18 }

// ** Изменение значения свойства

let person = {
    name: 'Ivan',
    age: 18,
};
// important: nxобы изменить значение уже существующего свойства необьходимо обратиться к нему по ключу:
person.age = 22;
console.log(person);            // возвращает объект { name: 'Ivan', age: 22 }

// * Копирование объекта
// Копирование ссылки на объект
// warning: при копировании объекта в другую переменную, сам объект не дублируется, а копируется только ССЫЛКА не него
// warning: это означает, что при изменении скопированного объекта, изменится объект их первоначальной переменной

let person = {
    name: 'Ivan',
    age: 18,
};

let newObject = person;     // копирование ссылки обхекта person в переменную newObject
newObject.age = 22;         // изменение значения свойства age на 22
console.log(person);        // возвращает объект { name: 'Ivan', age: 22 }
console.log(newObject);     // возвращает объект { name: 'Ivan', age: 22 }

// * Дублирование объекта
// important: полное дублирование объекта, а не копирование ссылки на первоначальный объект
// important: для дублирование объекта используется Object.assign

let person = {
    name: 'Ivan',
    age: 18,
};
// Object.assign(куда(объект), что(свойство 1), что(свойство 2))
let newObject = Object.assign({}, person)       // дублируется объект person в переменную newObject со всеми свойствами

newObject.age = 22;
console.log(person);        // возвращает объект { name: 'Ivan', age: 18 }
console.log(newObject);     // возвращает объект { name: 'Ivan', age: 22 }

// important: аналогичного результата можно добиться с помощью spread-оператора

let person = {
    name: 'Ivan',
    age: 18,
};
let newObject = { ...person };
newObject.age = 22;
console.log(person);        // возвращает объект { name: 'Ivan', age: 18 }
console.log(newObject);     // возвращает объект { name: 'Ivan', age: 22 }

// * Проверка свойства на наличие

let person = {
    name: 'Ivan',
    age: 18,
};

if (person.addess) {                // если свойство address в объекте person существует, то возвращает true
    console.log(person.address);    // тогда возвращает его значение
};
// warning: если в объекте есть еще один объект, то при обращении к несуществующему свойству внутреннего объекта появится ошибка
// important: синтаксис "Опциональная цепочка" позволяет с помощью оператора ?. избежать ошибки:
console.log(person?.address?.city);   // вместо ошибки результатом будет undefined

// * Цикл for in
// important: используется для перебора всех свойств объекта

let person = {
    name: 'Ivan',
    age: 18,
};

// for (let key in object)
for (let key in person) {
    console.log(key);               // возвращает ключ каждого свойства в объекте
    console.log(person[key]);       // возвращает значение каждого из свойств с соответствующим ключом
};

// * Методы объекта

let person = {
    name: 'Ivan',
    age: 18,
};

const keys = Object.keys(person);       // присваивает массив из всех ключей объекта
console.log(keys);                      // возвращает [ 'name', 'age' ]

const values = Object.values(person);   // присваивает массив их всех значений объекта
console.log(values);                    // возвращает [ 'Ivan', 18 ]
