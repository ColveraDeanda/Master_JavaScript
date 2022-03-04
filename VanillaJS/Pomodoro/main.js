const tasks = []
let time = 0
let timer = null
let timebreak = null
let current = null

const itTask = document.querySelector('#itTask')
const bAdd = document.querySelector('#bAdd')
const form = document.querySelector('#form')



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
                <div class="completed">${task.completed ? `<span class="done">Done</span>` : `<button class="start-button" data-id="${task.id}">Start</button>`}</div>
                <div class="title">${task.title}</div>
            </div>
        `
    });
    const tasksContainer = document.querySelector('#tasks')
    tasksContainer.innerHTML = html.join('')

}



