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

filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)
