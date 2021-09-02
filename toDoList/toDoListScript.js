window.addEventListener('load', () => {
    const tasks = JSON.parse(localStorage.getItem('toDoTasks'));
    if (tasks.length) {
        const tasksElements = tasks.map(task => `
            <div class="task">
                <span id="taskname">${task}</span>
                <button class="delete">Delete</button>
            </div>
        `);
        document.querySelector('#tasks').innerHTML = tasksElements.join("");
    };
});

const createNewTask = function () {
    const inputValue = document.querySelector('#newTask input').value;
    if (inputValue) {
        const toDoTasks = JSON.parse(localStorage.getItem('toDoTasks')) || [];
        localStorage.setItem('toDoTasks', JSON.stringify([...toDoTasks, inputValue]));
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">${inputValue}</span>
                <button class="delete">Delete</button>
            </div>
        `;

        const currentTasks = document.querySelectorAll('.delete');
        for(let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            };
        };

        const tasks = document.querySelectorAll('.task');
        for(let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle("completed");
            };
        };

        document.querySelector('#newTask input').value = "";

    } else {
        alert('Please enter task');
    };
};

document.querySelector('#push').onclick = createNewTask;
document.addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        createNewTask();
    };
});