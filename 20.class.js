// * Класс

// В объектно-ориентированном программировании класс - это расширяемый шаблон кода для создания объектов
// который устанавливает в них начальные значения (свойства) и реализацию поведения (методы)

// Синтаксис классов не вводит новую объектно-ориентированную модель, 
// а предоставляет более простой и понятный способ создания объектов и организации наследования

function Person(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.sayName = function() {
    alert(this.name);
};
Person.prototype.getOlder = function(years) {
    this.age += years;
};


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    sayName() {
        alert(this.name);
    };
    getOlder(years) {
        this.age += years;
    };
};

// Задача 1
// Переписать функцию-конструктор в виде класса:
function Car(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.changeColor = function(newColor) {
        this.color = newColor;
    };
};
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');
// --------
class Car {
    constructor(name, year, color){
        this.name = name;
        this.year = year;
        this.color = color;
    };
    changeColor(newColor) {
        this.color = newColor;
    };
};
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');


// Определение класса начинается с ключевого слова class, за которым следует имя типа
// Свойства и методы класс определяются в фигурных скобках
// чтобы определить метод, достаточно указать его имя и скобки, а ключевое слово function не требуется

// Если метод называется constructor, он работает как конструктор объекта
// Все остальные методы и свойства, определнные в фигурных скобках класс, применяются к прототипу

// Метод constructor - специальный метод, необходимый для создания и инициализации объектов, созданных с помощью класса
// В классе может быть только один метод с именем constructor

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}
let user = new Person('Alex');
user.sayHi();

// когда вызывается new Person создается новый объект, конструктор запускатся с заданным аргументом и сохраняет его в this.name


// Задача 2
// Ваша задача реализовать класс Person
// Вы должны заполнить метод constructor, чтобы принять имя как строку и возраст как число
// реализовать метод getInfo получения информации, который должен вернуть, например Johns age 34

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return `${this.name}s age ${this.age}`
    }
};
let person = new Person('John', 34);
person.getInfo();


// * Наследование

// Главное преимущество классов над более традиционымм js-синтаксисом - простота реализации наследования
// Можно использовать простой синтаксис, общий для многих языков: ключевое слово extends

class Employee extends Person {

}

// если мы определим свой метод с таким же именем в дочернем классе, то он будет использоваться взамен родительского
// обычно мы не заменяем родительский метод, а скорее делаем новый на его основе, изменяя или расширяя его функциональность
// мы делаем что-то в нашем методе и вызываем родительский метод до/после или в процессе с помозью ключего слово "super"

// super.method(...) вызывает родительский метод
// super(...)       вызывает родительский конструктор (работает только внутри нашего конструктора)

// наследование конструкторов:

// constructor(name, age) {
//     super(name);
//     this.age = age;
// }


// Задача 3

// Ващща задача - реализовать класс Cat, который расширяет Animal, и заменить метод speak, чтобы вернуть имя кошки + мяу
// например "Mr Whiskers meows".

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        alert(this.name + 'says hi');
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak(){
        alert(this.name + 'meows');
    }
}
let cat = new Cat('Mr Whiskers');
cat.speak();


class Person {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    fullName() {
        console.log(`${this.firstName} ${this.secondName}`);
        return `${this.firstName} ${this.secondName}`;
    }
}
let person = new Person('Alex', 'Petrov');
person.fullName();  // Alex Petrov

class Empoyee extends Person {
    constructor(firstName, secondName, vacancy) {
        super(firstName, secondName);
        this.vacancy = vacancy;
    }
    fullName(){
        console.log(`${this.firstName} ${this.secondName} (${this.vacancy})`);
    }
    getInfo(){
        console.log(`${super.fullName()} (${this.vacancy})`);
    }
}
let employee = new Employee('Alex', 'Petrov', 'developer');
employee.fullName();    // Alex Petrov (developer)


// Задача 4
// Создать класс Person со стандартными свойствами (имя, возраст) и действиями (идти, разговаривать, есть) человека, от него 
// наследовать классы ребенок и взрослый со своими особенными методами и свойствами (например у ребенка - плакать, или ходить в школу)

