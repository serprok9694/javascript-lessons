// * колбэки

// функции называют асинхронными, потому что действие будет завершено не сейчас, а потом.
// Аргументом в такие функции передается функция, которая выполняется по завершении действия
// это и есть функция обратного вызова

function load(scriptUrl, callback) {
    let script = document.createElement('script');
    script.src = scriptUrl;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('Ошибка загрузки'));
};


// * Промисы
// объект Promise (промис) используется для отложенных и асинхронных вычислений

const newPromise = new Promise((resolve, reject) => {
    resolve('test');
});
newPromise.then((value) => {
    console.log(value);     // возвращает test
});

// Функции могу быть зарегистрированы (подписаны) с помощью методом .then, .catch и .finally
Promise.then(
    function(result) { /* успешное выполнение */ },
    function(error) { /* ошибка */  },
);

Promise
    .then(result => { /* успешное выполнение */ })
    .catch(err => { /* ошибка */  })

// первый аргумент метода .then - функция, котоаря выполняется, когда промис переходит в состояние "выполнен успешно", и получает результат
// второй аргумент метода .then - функция, которая выполняется, когда промис переходит в состояние "выполнен с ошибкой" и получает ошибку

// аргументы resolve и reject - это колбэки, которые предоставляет сам JavaScript. Наш код - толлько внутри исполнителя
// когда промис получает рузльтат, сейчас или позже - не важно, он должен вызвать один из этих колбэков

// resolve(value) - если работа завершилась успешно, с результатом value.
// reject(error) - если произошла ошибка, error - объект ошибки

// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorFunc)
// или можно воспользоваться методом .catch(errorFunc), который сделает тоже самое

// .finally(() => alert('промис завершен'));
// функция в аргументе .finally выполнится в любом случае, когда промис завершится: успешно или с ошибкой


// * Promise.all
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(alert());


// * Async / await
// специальный синтаксис для работы с промисами - "async/await"

async function newFunc () {
    return 1;
};  // эта функция всегда возвращает промис

// ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
// после чего оно вернет его результат, и выполнение кода продолжится

async function newFunc() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    let result = await promise; // будет ждать, пока промис не выполнится
    alert(result);              // возвращает 1
};
newFunc();


// * Сетевые запросы
// для сетевых запросов в JavaScript можно использовать методы fetch

let response = fetch(url, [options]);

// url - адрес для отправки запроса
// options - дополнительные параметры: метод, заголовки и так далее

// Свойства response:
// status: код статуса HTTP-запроса, например 200.
// ok: логическое значение, будет true, если код HTTP-запроса в диапазоне 200-299

//Методы для response
response.text();    // читает ответ и возвращает как обычный текст
response.json();    // декодирует ответ в формате JSON
response.formData();    // возвращает ответ как объект FormData
response.body       // можно считывать тело запроса по частям

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
	.then(response => response.json())
	.then(commits => console.log(commits));

// установить хедеры запроса:
let response = fetch(url, {
    headers: {
        Authentication: 'secret',
    }
})

// Для отправки POST запроса или запроса с другим методом, нам необходимо использовать fetch параметры

// method - HTTP метод, например POST
// body - тело запроса

let response = await fetch('fetch/post/user', {
    method: 'POST',
    body: JSON.stringify(user),
});

// Задача 1
// Создайте асинхронную функцию getTasks(), которая возвращает массив объектов категорий.
// Данные получать по ссылке https://test-todoist.herokuapp.com/api/tasks
// Необходимо вывести имена и описание этих задач на странице в виде списка

const getTasks = async () => {
	const tasks = await fetch('https://test-todoist.herokuapp.com/api/tasks')
		.then(response => response.json())
		.then(tasks => tasks);
	const main = document.getElementById('main');
	const ul = document.createElement('ul');
	tasks.map(task => {
		const li = document.createElement('li');
		li.innerHTML = task.description;
		ul.append(li);
	});
	main.append(ul);
};
getTasks();


// Задача 2
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей github
// запрашивает у github информацию о них и возвращает массив объектов-пользователей
// информация о пользователе github с логином USERNAME доступна по ссылке https://api.github.com/users/USERNAME


async function getUsers(names) {
    let jobs = [];
    for(let name of names) {
        let job = fetch('https://api.github.com/users/'+name)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                } else {
                    return response.json();
                }
            })
            .catch(error => console.log(error));
        jobs.push(job);
    };
    let results = await Promise.all(jobs);
    console.log(results);
};
getUsers(['serprok9694', 'chapski-dev', 'EvgeniSasim'])