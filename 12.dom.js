// DOM - Объектная модель документа (Document Object Model)
// DOM представляет документ как иерархическое дерево элементов, позволяя добавлять, удалять и изменять отдельные части страницы

<html>
    <head>
        <title>Simple page</title>
    </head>
    <body>
        <p>Hello!</p>
    </body>
</html>

// обращение к элементам DOM представляется в JavaScript с помощью глобального объекта document

const originalTitle = document.title;       // возвращает Simple page

// задание заголовка документа

document.title = "New page title";      // новый заголовок страницы

// получение полного URL-адреса

const url = document.url;

// * Получение элементов

// ** Метод getElementById
// принимает идентификатор элемента, который нужно получить, и возвращает этот элемент или null, если его не существует

<div id="myDiv">Some text</div>

// этот элемент можно получить следующим образом:
const div = document.getElementById("myDiv");     // получение ссылки на div

// ** Метод querySelector
// принимает CSS-запрос и возвращает первый соответсвующий ему элемент, либо значение null^ если таковой не найден

document.querySelector('div');
document.querySelector('.block')

// ** Метод querySelectorAll
// принимает CSS-запрос и возвращает массив со всеми свойствами

document.querySelectorAll('.block');

// ** Метод getElementsByClassName
// принимает строку с одним или несколькими именами классов и возвращает массив

document.getElementsByClassName('class');

// * Свойство classList
// это свойство существует специально для добавления, удаления либо замены имен классов

// у него есть дополнительные методы

// add - добавляет класс
// contains - указывает, есть ли указанный класс в элементе
// remove - удаляет класс
// toggle - удаляет класс, если он уже есть, и добавляет, если отсутствует

const block = document.querySelector('.root');
block.classList.add('param');


// * Стили и их изменение при помощи JS
// у любого html элемента есть свойство style, доступное при помощи js
// каждое css свойство можно определить либо переопределить при помощи обращения к свойству style элемента
// свойства, которые в css пишутся через дефис, в JS используются в camelCase:
// background-color ==> backgroundColor

const block = document.querySelector('.root');
block.style.color = 'red';
block.style.textTransform = 'uppercase';


// * Создание элементов
// элементы можно создавать с помощью метода document.createElement(), который принимает имя тега создаваемого элемента

const div = document.createElement('div');

// * Добавление элементов
// методы добавления

// block.append() - добавляет узлы или строки в конец block
// block.prepend() - вставляет узлы или строки в начало block
// block.before() - вставляет узлы или строки до block
// block.after() - вставляет узлы или строки после block
// block.replaceWith() - заменяет block заданными узлами или строками

// * Свойство innerHTML
// устанавливает или получает разметку дочерних элементов

block.innerHTML = '<p>test!</p>';

// * Удаление узлов
block.remove();


const p = document.createElement('p');
const div = document.createElement('div');
const main = document.getElementById('main');

p.classList.add('text');
p.innerText = "Это всего лишь текст";

div.classList.add('alert');
div.innerText = 'А это сообщение об ошибке';
div.style.backgroundColor = 'red';
div.style.color = 'white';
div.style.padding = '20px';

main.append(p);
main.append(div);



// const users = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
// const ol = document.createElement('ol');
// const list = users.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.innerText = item;
//     li.classList.add(index % 2 ? 'even' : 'odd');
//     if (li.classList.contains('even')) li.style.background = 'green';
//     if (li.classList.contains('odd')) li.style.background = 'blue';
//     if ([...new Set(item.split(''))].join("").length !== item.length) li.style.color = 'white';
//     ol.append(li);
// });
// main.append(ol);