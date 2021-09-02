// * Прототипы

// Каждая функция создается со свойством prototype
// prototype - это объект, содержащий свойства и методы, которые должны быть доступны в экземплярах конкретного ссылочного типа
// этот объект в буквальном смысле является прототипом для объекта, создаваемого при вызове конструктора
// Преимущество использования прототипа в том, что его свойства и методы общие для объектов
// Вместо того чтобы назначать атрибуты объекту в конструкторе, их можно назначить непосредственно прототипу

// Когда мы хотим прочитать свйоство из object , а оно отсутствует, JavaScript автоматически берет его из прототипа
// В программировании такой механизм нахввается "прототипным наследованием"

// Свойство [[prototype]] является внутренним и скрытым, но есть много способов задать его

let animal = {
    eats: true,
};
let rabbit = {
    jumps: true,   
};
rabbit.__proto__ = animal;
rabbit.eats;



let animal = {
    eats: true,
};
function Rabbit(name) {
    this.name = name;
};
Rabbit.prototype = animal;
// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
// При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]
let rabbit = new Rabbit('White rabbit'); // rabbit.__proto__ = animal
console.log(rabbit.eats); // true



// С помощью прототипов встроенных обхъектов можно получать ссылки на методы, предполагаемые по умолчанию и определять новые методы
// Кроме того, эти прототипы можно изменять, что позволяет добавлять методы к встроенным объектам
// obj = new Object(), где Object - встроенная функция-конструктор для объектов с собственным свойством prototype, 
// которое ссылается на огромный объект с методом toString() и другими
// Другие встроенные объекты, такие как Array, Date, Function и другие, также хранят свои методы в прототипах


function Animal() {
    this.run = function() {
        alert('run');
    };
};
function Rabbit() {
    this.jump = function() {
        alert('jump');
    };
};
Rabbit.prototype = new Animal();
let rabbit = new Rabbit();
rabbit.run(); // run


// * Методы прототипов
Object.getPrototypeOf(obj)  // возвращает свйоство [[prototype]] объекта obj
Object.setPrototypeOf(obj)  // устанавливает свйоство [[prototype]] объекта obg


// Задача 1
// Создать функцию Dog, который наследует метод eat из объекта Animal

function Dog() {}
function Animal() {
    this.eat = function() {
        console.log('eat');
    };
};
Dog.prototype = new Animal();
let dog = new Dog();
dog.eat();
