let events = []
let currentFormatDate = null
let eventFormatDate = null;


const eventName = document.querySelector('#eventName');
const eventDate = document.querySelector('#eventDate');
const baddEvent = document.querySelector('#baddEvent');
const eventsContainer = document.querySelector('#eventsContainer')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const event = eventName.value
    const eventD = eventDate.value
    currentFormatDate = new Date(currentlyDateFormat())
    eventFormatDate = new Date(eventDateFormat())
    // console.log(eventD)

    if (eventName.value !== '' && eventDate.value !== '') {
        if (eventFormatDate > currentFormatDate) {
            createObject(event, eventD)
            eventName.value = ''
            eventDate.value = ''
            eventsRender()
            console.log(events)
        } else {
            alert('La fecha del evento debe ser mayor que la fecha actual.')
        }
    } else {
        alert('Ingrese los campos correctamente.')
    }

})


let createObject = (eventName, eventDate) => {
    const eventObj = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName,
        date: eventDate,
        diffDays: getDiffDays()
    }
    events.unshift(eventObj)
}


function eventsRender() {
    let html = events.map(event => {
        return `
        <div class="event">
            <span>${event.diffDays} Dias</span> <span>${event.name}</span> <span>${event.date}</span>
            <button data-id="${event.id}" id="btnDelete">Eliminar</button>
        </div>
        `
    })
    eventsContainer.innerHTML = html.join('');
    const buttonDelete = document.querySelectorAll('#btnDelete');
    buttonDelete.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = button.getAttribute('data-id')
            deleteEvent(id)
        })
    })

}

// Date Functions

function getDiffDays() {
    const diffTime = Math.abs(eventFormatDate - currentFormatDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Return: 12-13-2010 [mes-dia-anio]
function currentlyDateFormat() {
    const d = new Date()
    return (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear()
}

function eventDateFormat() {
    let dateSplit = eventDate.value.split('-')
    return `${dateSplit[1]}-${dateSplit[2]}-${dateSplit[0]}`
}

let deleteEvent = id => {
    events = events.filter(event => event.id !== id)
    eventsRender()
}




