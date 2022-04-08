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


// Ejemplo de array multidimensional de 6 niveles.
let arrayyy = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
        ['loop', 'deep', 6, 7, 1000, 'method'],
        ['concat', false, true, 'spread', 'array']
    ],
    [
        [
            ['mutate', 1327.98, 'deeper', 'slice', 'push']
        ]
    ],
    [
        [
            [
                [
                    ['iterate', 1.3849, 7, '8.4876', 'deepest', 'depth']
                ]
            ]
        ]
    ]
]

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
        if (studentObj[user].trabajo) {
            arr.push(studentObj[user])
            count++
        }
    }
    console.log(arr)
    count
}
// studentsWithFor(students)

// Object.keys = Guardara en un array de strings las claves del objeto.
console.log(Object.keys(students))


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    const friends = userObj.data.friends
    friends.push(friend)
    return friends
}
//console.log(addFriend(user, 'Pete'));

function findLongestWordLength(str) {
    str = str.split(' ')
    wordLength = str.map((word) => word.length)
    return Math.max(...wordLength)
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function largestOfFour(arr) {
    let largestArray = []
    for (let i = 0; i < arr.length; i++) {
        largestArray.push(Math.max(...arr[i]))
    }
    return largestArray;
}
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function repeatStringNumTimes(str, num) {
    if (num < 0) return '';
    let string = ''
    for (let i = 0; i < num; i++) {
        string += str
    }
    console.log(string)
    return string;
}

//repeatStringNumTimes("*", 3);

function truncateString(str, num) {
    if (str.length == num || str.length < num) return str
    let truncateStr = str.slice(0, num)
    return truncateStr.concat('...')
}

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]
        }
    }
    return undefined
}

console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));

function booWho(bool) {
    if (typeof bool === 'boolean') {
        return true
    } else {
        return false
    }
}

function titleCase(str) {
    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();
    }
    return strArr.join(' ')
}

// console.log(titleCase('Im a little tea pot'))

function frankenSplice(arr1, arr2, n) {
    let [...copyArr2] = arr2
    copyArr2.splice(n, 0, ...arr1)
    return copyArr2
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

const bouncer = (arr) => {
    return arr.filter((item) => Boolean(item))
}

//console.log(bouncer([false, null, 0, NaN, undefined, ""]));

function getIndexToIns(arr, num) {
    arr.push(num)
    let arrSorted = arr.sort((a, b) => a - b)
    return arrSorted.indexOf(num)
}

function mutation(arr) {
    arr[0] = arr[0].toLowerCase()
    arr[1] = arr[1].toLowerCase()
    for (let i = 0; i < arr[1].length; i++) {
        if (!arr[0].includes(arr[1].charAt(i))) {
            return false
        }
    }
    return true
}

function chunkArrayInGroups(arr, size) {
    let groupArr = []
    let start = 0
    let end = size
    for (let i = 0; i < arr.length; i+=size) {
        let tempArr = arr.slice(start, end)
        groupArr.push(tempArr)
        start += size
        end += size
    }
    return groupArr
}

  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

