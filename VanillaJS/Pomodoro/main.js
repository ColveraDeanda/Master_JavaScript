const tasks = []
let time = 0
let timeForBreak = 0
let timer = null
let timebreak = null
let current = null

const itTask = document.querySelector('#itTask')
const bAdd = document.querySelector('#bAdd')
const form = document.querySelector('#form')
const taskName = document.querySelector('#time #taskName');


renderTime()

// Se va a ejecutar la funcion cuando se dispare el evento submit en form
form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (itTask.value !== '') {
        createTask(itTask.value)
        itTask.value = ''
        renderTasks();
    }
    // El método preventDefault() cancela el funcionamiento nativo del elemento HTML.
})

function createTask(value) {
    const newTask = {
        id: randomId(),
        title: value,
        completed: false
    }
    tasks.unshift(newTask)
}

function randomId() {
    return (Math.random() * 100).toString(36).slice(3)
}

let renderTasks = () => {
    let html = tasks.map(task => {
        return `
            <div class="task">
                <div class="completed">${task.completed ? `<span class="done">Done</span>` :
                `<button class="start-button" data-id="${task.id}">Start</button>
                 <button class="delete-button" data-id="${task.id}">Delete</button>
                `}</div>
                <div class="title">${task.title}</div>
            </div>
        `
    });
    const tasksContainer = document.querySelector('#tasks')
    tasksContainer.innerHTML = html.join('')

    const startButtons = document.querySelectorAll('.task .start-button')
    const deleteButtons = document.querySelectorAll('.task .delete-button')

    // Inyectando el evento click a todos los botones Start.
    startButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (!timer) {
                console.log('wefweffffwf')
                const id = button.getAttribute('data-id')
                startButtonHandler(id)
            }
            if (current != null) {
                button.textContent = 'In process...'
            }
        })
    })

    // Inyectando el evento click a todos los botones Delete.
    deleteButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const id = button.getAttribute('data-id')
            deleteButtonHandler(id)
        })
    })
}

let startButtonHandler = (id) => {
    time = prompt('Por favor ingresa los segundos de la actividad', 1);
    timeForBreak = prompt('Por favor, ingrea los segundos para el break', 1)
    if (time != null && time != '') {
        if (!isNaN(time)) {
            if (time >= 1) {
                current = id;
                const taskIndex = tasks.findIndex(task => task.id === id);
                taskName.innerHTML = `Haz empezado la tarea: <strong>${tasks[taskIndex].title}</strong>!!`;
                renderTime()
                timer = setInterval(() => {
                    timeHandler(id)
                }, 1000)
            } else {
                alert('Por favor, ingresa una cantidad mayor a 0 para iniciar la actividad.')
            }
        } else {
            alert('Solo se aceptan numeros.')
        }
    } else {
        alert('Debe ingresar el tiempo para inicar la actividad.')
    }
}

function timeHandler(id) {
    time--; // Se restara el total de segundos -1
    renderTime()

    if (time === 0) {
        clearInterval(timer)
        timer = null
        markCompleted(id)
        startBreak(id)
        renderTasks()
        renderTime()
    }
}

function startBreak(id) {
    const index = tasks.findIndex(elem => elem.id === id)
    renderTime()
    taskName.innerHTML = `El break para la actividad: <strong>${tasks[index].title}</strong> ha empezado.`
    timebreak = setInterval(() => {
        timerBreakHandler()
    }, 1000)
}

function timerBreakHandler() {
    timeForBreak--
    renderTime()

    if (timeForBreak === 0) {
        const d = new Date();
        clearInterval(timebreak)
        current = null
        timebreak = null
        taskName.textContent = `El break a completado a las: ${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`
        renderTasks()
    }
}

function renderTime() {
    const timeDiv = document.querySelector('#time #value');
    let minutes = 0
    let seconds = 0

    if (timebreak == null) {
        minutes = parseInt(time / 60) // ParseInt regresara un entero
        seconds = parseInt(time % 60)
    } else {
        minutes = parseInt(timeForBreak / 60) // ParseInt regresara un entero
        seconds = parseInt(timeForBreak % 60)
    }
    timeDiv.textContent = `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
}

function markCompleted(id) {
    const elemIndex = tasks.findIndex(elem => elem.id === id)
    tasks[elemIndex].completed = true
    console.log(tasks)
}

function deleteButtonHandler(id) {
    const text = 'Estas seguro de eliminar la actividad???'
    if (confirm(text)) {
        const taskIndex = tasks.findIndex(elem => elem.id === id)
        taskName.innerHTML = `La actividad: ${tasks[taskIndex].title} ha sido eliminada :(..`
        tasks.splice(taskIndex, 1)
        renderTasks()
        clearInterval(timer)
        time = 0
        timeForBreak = 0
        timer = null
        renderTime()
    }
}

