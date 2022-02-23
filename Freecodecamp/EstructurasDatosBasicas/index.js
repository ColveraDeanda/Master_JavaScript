const sumaMax = (arr) => {
    let sum = arr.reduce((acum, value) => acum + value)
    if (sum > 10) {
        arr.splice(0, 1)
    }
    return arr.reduce((acum, value) => acum + value) > 10 ? sumaMax(arr) : arr
}



let htmlColorNames = (arr) => {
    let elements = ['DarkSalmon', 'BlanchedAlmond']
    return arr.splice(0, 2, ...elements)
}

let forecast = (arr) => arr.slice(2, 4)

//
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Cambia solo el código debajo de esta línea
        newArr.push([...arr])
        // Cambia solo el código encima de esta línea
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2))


// Otro ejemplo usando el metodo de propagacion
let addingnewElemets = (arr) => {
    const colors = ['green', ...arr, 'red']
    return colors
}


let filteredArray = (arr, elem) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


// // Ejemplo de array multidimensional de 6 niveles.
// let arrayyy = [
//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     [
//         ['loop', 'deep', 6, 7, 1000, 'method'],
//         ['concat', false, true, 'spread', 'array']
//     ],
//     [
//         [
//             ['mutate', 1327.98, 'deeper', 'slice', 'push']
//         ]
//     ],
//     [
//         [
//             [
//                 [
//                     ['iterate', 1.3849, 7, '8.4876', 'deepest', 'depth']
//                 ]
//             ]
//         ]
//     ]
// ]

// Aparte del metodo hasOwnProperty() tambien se puede verificar la propiedad de un objeto 
// Con la palabra clave in
const student = {
    nombre: 'Cris',
    '100d': 45
}
console.log(student.hasOwnProperty('nombre'))
console.log('nombre' in student)
console.log('100d' in student)



const students = {
    Cristobal: {
        edad: 23,
        trabajo: true
    },
    Lira: {
        edad: 23,
        trabajo: true
    },
    Ashley: {
        edad: 23,
        trabajo: false
    }
}
console.log('Cristobal' in students)

const studentsWithFor = (studentObj) => {
    let arr = []
    let count = 0
    for (let user in studentObj) {
        console.log(user)
        if (studentObj[user].trabajo === true) {
            arr.push(studentObj[user])
            count++
        }
    }
    console.log(arr)
    count
}

studentsWithFor(students)


