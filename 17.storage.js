// * Storage

// с появлением веб-приложений потребовалось хранить пользавательскую информацию непосредственно на клиентском компьютере
// информация, относящаяся к конкретному пользователю должна находиться на его компьютере, будь то сведения для входа в систему, предпочтения или другие данные

// Тип Storage позволяет хранить пары имен и значений, при этом максимальный объем хранилища определяется браузером

// * sessionStorage
// Объект sessionStorage хранит данные только в течение сеанса, то есть до закрытия браузера
// Данные, сохраненные в объекте sessionStorage, остаются в нем при обновлении страницы

// sessionStorage существует только в рамках текущей вкладки браузера
// другая вкладка с той же страницей будет иметь другое хранилище
// данные продолжают существовать после перезагрузки страницы. но не после закрытия/открытия вкладки


// * localStorage
// основные особенности localStorage:
// этот объект один на все вкладки и окна в рамках источника (один и тот же домен/протокол/порт)
// данные не имеют срока давности, по которому они истекают или удаляются. Сохраняются после перезапуска браузера и даже ОС

// Методы:
// setItem(key, value) - сохранить пару ключ/значение
// getItem(key) - получить данные по ключу key
// removeItem(key) - удалить данные с ключом key
// clear() - удалить все
// key(index) - получить ключ по заданной позиции
// length - количество элементов в хранилище

// important: value в storage может быть только типа string

// * Событие storage
// когда обновляются данные в localStorage или sessionStorage, генерируется событие storage:
window.onstorage = e => {};


// Задача 1
// Создать страницу: поле ввода имени и кнопка сохранить. 
// При нажатии кнопки - данные сохраняются в localstorage и на экране исчезают эти поля и кнопка и  появляется сообщение -  Добро пожаловать, (имя) 
// При перезагрузке страницы, если в localstorage есть эти данные - сообщение должно остаться на экране

window.addEventListener('load', () => checkStorage());

const checkStorage = () => {
    const name = localStorage.getItem("name");
    if (name) {
        document.getElementById("main").innerHTML = `Добро пожаловать, ${name}`;
    };
};

const save = () => {
    const value = document.getElementById("name").value;
    if (!value) {
        alert('Введите имя');
        return;
    }
    localStorage.setItem("name", value);
    checkStorage();
};