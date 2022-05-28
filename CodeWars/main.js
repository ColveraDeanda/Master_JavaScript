"use strict"

function checkParity(parity, bin) {
    let arr = bin.toString().split('')
    let bin_filter = arr.filter(item => item == "1")
    if (parity == 'even') {
        return bin_filter.length % 2 == 0 ? 0 : 1
    } else {
        return bin_filter.length % 2 != 0 ? 0 : 1
    }
}

function absentVowel(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let str_array = string.split('')
    for (let i = 0; i < str_array.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str_array[i] == vowels[j]) {
                vowels.splice(vowels.indexOf(vowels[j]), 1)
                break;
            }
        }
    }
    switch (vowels[0]) {
        case 'a': return 0;
        case 'e': return 1;
        case 'i': return 2;
        case 'o': return 3;
        case 'u': return 4;
    }
}


function onesComplement(n) {
    return [...n].map(item => item == 1 ? item = 0 : 1)
};


/*
  Given two integers a and b, which can be positive or negative, find the sum of all the integers
  between and including them and return it. If the two numbers are equal return a or b.
  Note: a and b are not ordered!
*/
function sumRange(a, b) {
    if (a === b) return a
    let sum = []
    let numbersArray = [a, b].sort((a, b) => a - b)
    for (let i = numbersArray[0]; i <= numbersArray[1]; i++) {
        sum.push(i)
    }
    return sum.reduce((a, b) => a + b, 0)
}

function friends(names) {
    let namesFiltered = names.filter((item, index, array) => {
        console.log(index)
        return item.length == 4
    })
    return namesFiltered
}

function sumTwoSmallestNumbers(numbers) {
    let positiveNumbers = numbers.filter(item => item > 0)
    positiveNumbers.sort((a, b) => a - b)
    return positiveNumbers[0] + positiveNumbers[1]
}

function toCamelCase(str) {
    str.replace()
    if (str.length === 0) return str;
    let splitted = str.split('-')
    if (splitted.length == 1) {
        splitted = str.split('_')
    }
    let firstWord = splitted.shift()
    let firstLetterUpper = splitted.map(item => item[0].toUpperCase() + item.slice(1))
    return firstWord + firstLetterUpper.join('')
}

function duplicateEncode(word) {
    let newString = ''
    let wordToLower = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        let charFilter = [...wordToLower].filter(x => x == wordToLower[i])
        charFilter.length == 1 ? newString += '(' : newString += ')'
    }
    return newString
}

function likes(names) {
    switch (names.length) {
        case 0: return "no one likes this";
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

function sumStrings(a, b) {
    return (BigInt(a) + BigInt(b)).toString()

}


/* MI SOLUCIUON*/
function dirreccion(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'NORTH' && arr[i + 1] == 'SOUTH' || arr[i] == 'SOUTH' && arr[i + 1] == 'NORTH') {
            arr.splice(i, 2)
            count++;
            i--;
        } else if (arr[i] == 'WEST' && arr[i + 1] == 'EAST' || arr[i] == 'EAST' && arr[i + 1] == 'WEST') {
            arr.splice(i, 2)
            count++;
            i--;
        }
    }
    return count === 0 ? arr : dirreccion(arr)

}
// dirreccion(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

function filter_list(numbersAndStrings) {
    return numbersAndStrings.filter(Number.isInteger)
}

function binaryToNumber(arr) {
    return parseInt(arr.join(''), 2)


}
//console.log(binaryToNumber([1, 1, 1, 1]))

function minMax(arr) {
    if (arr.length == 1) return [arr[0], arr[0]]
    let arrSorted = []
    arrSorted = arr.sort((a, b) => a - b)
    return [arr[0], arr[arrSorted.length - 1]]
}

// minMax([4,3])
//minMax([2334454,5])


function areEquals(stringOrArray) {
    if (stringOrArray.length == 0) return true
    let equal = true
    let rep = stringOrArray.length - 1;
    for (let i = 0; i < rep; i++) {
        if (stringOrArray[i] !== stringOrArray[i + 1]) {
            equal = false
            break;
        }
    }
    return equal
}

function correct(string) {
    // Splitear el string.
    // Recorrer mi arreglo con un for y usar in IF para comparar si ese elemento es un 0, 1, 5
    // Dentro del IF usar splice para eliminar el elemento actual e ingresar la letra correct.
    // Convertir a String ese Arreglo final spliteado.
    let str_splitted = string.split('')
    for (let i = 0; i < str_splitted.length; i++) {
        if (str_splitted[i] == '0') {
            str_splitted.splice(i, 1, 'O')
        }
        if (str_splitted[i] == '1') {
            str_splitted.splice(i, 1, 'I')
        }
        if (str_splitted[i] == '5') {
            str_splitted.splice(i, 1, 'S')
        }
    }
    return str_splitted.join('')
}
//correct('ADC000051')

function greet(name, owner) {
    console.log(name === owner ? 'Hello boss' : 'Hello guest')
}

// Hacer doble for para que vaya recorriendo cada elemento con todo el array y en caso
// De que el numero se repita (i == j), aumentar un contador. El contador se inicializa despues del primer for, cont = 0
// Si ese contador es par, se tendra que pushear en un nuevo array nuestro elemento que estamos buscando repetidos.
// Ese cont se pone fuera del 2do for.
function oddOnesOut(arrayFamilies) {
    let evenFamilies = []
    if (arrayFamilies.length == 0) { return evenFamilies }
    for (let i = 0; i < arrayFamilies.length; i++) {
        let count = 0
        for (let j = 0; j < arrayFamilies.length; j++) {
            if (arrayFamilies[i] === arrayFamilies[j]) {
                count++
            }
        }
        if (count % 2 == 0) { evenFamilies.push(arrayFamilies[i]) }
    }
    return evenFamilies
}


// Agregar yourPoints al array de puntos de toda la clase.
// sacar la suma total del array y dividirlo entre numero de elementos. Con esto se saca el promedio.
// Si misPuntos son mayor a promedio, devolver un true, sino devolver false.
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let average = (classPoints.reduce((acum, item) => acum + item, 0)) / classPoints.length
    return yourPoints > average ? true : false
}


// Primero splitear mi arreglo 
// Luego con un for, recorrer el arreglo y poner el primer if = Si en algun elemento encuentra un "(", 
// se guardara en una nueva variable, (start).
// Despues del 1er if, poner otro If =  Si en algun elemento encuentra un ")",
// Se guardara en una nueva variable, (end)
// Se usara el metodo splice para recortar ese arreglo, teniendo en cuenta el rango de start y end.
function removeParentheses(string) {
    let start = 0;
    let end = 0;
    let deleteCount = 0
    let str_splitted = string.split('')
    for (let i = 0; i < str_splitted.length; i++) {
        if (str_splitted[i] === '(') {
            start = i
        }
        if (str_splitted[i] === ')') {
            end = i
            break
        }
    }
    deleteCount = (end - start) + 1;
    str_splitted.splice(start, deleteCount)
    if (str_splitted.join('').includes('(') == true) {
        return removeParentheses(str_splitted.join(''))
    } else {
        return str_splitted.join('')
    }
}


let funcSuma = (num1, num2) => num1 + num2
let funcSuma2 = (num1, num2) => {
    let res = num1 + num2
    return res
}

let isMayor = (a, b) => a > b ? a : b
let multi = n => n * 10
let saludo = () => "Hola guapo"


// Hacer un ciclo de los elementos para pacer un Nuevo arreglo de todos los numeros impares.
// Ordenar ese arreglo de numeros impares
// Al arreglo de impares, se le va a ingresar cada numero par del arreglo orifinal usando un ciclo
let sortArray = array => {
    let oddArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            oddArray.push(array[i])
        }
    }

    let oddOrder = oddArray.sort((a, b) => a - b)

    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 == 0) {
            oddArray.splice(j, 0, array[j])
        }
    }

    return oddOrder

}

let getSmallerString = (arr, str) => {
    let smallerStr = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (arr[i] === str[j]) {
                smallerStr += arr[i];
                break;
            }
        }
    }
    return smallerStr.split('').reverse().join('');
}

function removeSmallest(numbers) {
    if (numbers.length == 0) { return }
    let arr = [...numbers]
    arr.sort((a, b) => a - b)
    arr.shift()
    return arr
}
//removeSmallest([5, 3, 2, 1, 4])



function solve(s) {
    const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const lowerCase = [...s].filter(elem => lowerLetters.includes(elem))
    const upperCase = [...s].filter(elem => upperLetters.includes(elem))

    if (lowerCase.length === upperCase.length || lowerCase.length > upperCase.length) {
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
}

function randdomSort(arr) {
    let random = [];
    const length = arr.length;
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        randomIndex
        random.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return random;
}

////////////////////////////////////////////////////////////
function i(word) {
    if (word[0] !== 'I' && word[0] !== 'i') {
        if (totalOfVowels(word) < word.length - totalOfVowels(word)) {
            if (word[0] == word[0].toUpperCase()) {
                return `i${word}`;
            }
        }
    }

    return 'Invalid word';
}

function totalOfVowels(word) {
    let vowels = [...word].filter(elem => {
        if (elem === 'a' || elem === 'A' || elem === 'e' || elem === 'E' || elem === 'i' || elem === 'I' || elem === 'o' || elem === 'O' || elem === 'u' || elem === 'U') {
            return elem
        };
    });

    return vowels.length;
}

function busStops(arr) {
    const totalInBus = arr.reduce((acc, elem) => acc + elem[0], 0)
    const getOffBus = arr.reduce((acc, elem) => acc + elem[1], 0)
    return totalInBus - getOffBus;
}


// busStops([[10,0],[3,5],[5,8]])


function order(words) {
    let order = []
    let arrWords = words.split(' ')
    console.log(arrWords)

    for (let i = 1; i <= arrWords.length; i++) {
        let elem = arrWords.find(elem => elem.includes(i.toString()))
        order.push(elem)
    }
    return order;
}

//console.log(order("is2 Thi1s T4est 3a"))

let splitStrings = (string) => {
    if (string.length % 2 === 0) {
        return arrByPar(string);
    } else {
        return arrByPar(string)
    }

}

function arrByPar(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            let elem = string[i + 1] || "_";
            arr.push(string[i] + elem);
        }
    }
    return arr;
}

//console.log(splitStrings("abvcdcgbhn"))

function reverseLetter(str) {
    let letterArray = str.split("")
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let filterByChar = letterArray.filter(elem => letters.includes(elem));
    return filterByChar.reverse();
}




const items = [
    { name: 'sfsdf', value: 67 },
    { name: 'Edward', value: 500 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Edward', value: 5 },
    { name: 'Edward', value: 100 }
];

// sort by name
items.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    const valueA = a.value;
    const valueB = b.value

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return valueA - valueB;
});

///////////////////////////
/*
1. Transformar string a un array de objetos.
2. sortear el array.
3. mapear el array de objetos con el formato () y a mayusculas
3. Convertir mapeo a string.
*/

// "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"

var arrFriends = [];
function meeting(s) {
    arrFriends = []
    let friends = s.split(";")
    for (let i = 0; i < friends.length; i++) {
        let splitName = friends[i].split(':')
        createArrFriends(splitName)
    }
    sortFriends(arrFriends)
    return arrFriends.map(friend => {
        return `(${friend.surname.toUpperCase()}, ${friend.name.toUpperCase()})`
    }).join("").trim();
}

function createArrFriends(friend) {
    let objFriend = {
        name: friend[0],
        surname: friend[1]
    }
    arrFriends.push(objFriend);
    return arrFriends;
}

function sortFriends(arr) {
    arr.sort(function (a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase();
        const surnameA = a.surname.toUpperCase();
        const surnameB = b.surname.toUpperCase();

        // Sort by surname
        if (surnameA < surnameB) {
            return -1;
        }
        if (surnameA > surnameB) {
            return 1;
        }

        // Sort by Name
        if (nameA < nameB) {
            return -1; // < 0: sort a before b.
        }
        if (nameA > nameB) {
            return 1;   // > 0: sort b before a.
        }
    });
}

/*
1. Splitear el string tomando las vocales como separador.
2. Hacer un for en donde recorrera todos los elementos del array spliteado y en cada iteracion
   mandar a llamar otra funcion que retornara el value de esa consonante/s.
3. Si el retorno de la funcion es mayor que highValue, entonces gurdar nuevo valor en esa misma
   variable.
*/
function highConsonantValue(s) {
    let arrConsonants = s.split(/[aeiou]/gi)
    let highValue = 0
    for (let i = 0; i < arrConsonants.length; i++) {
        let value = consonantValue(arrConsonants[i])
        if (value > highValue) {
            highValue = value;
        }
    }
    return highValue
}

function consonantValue(consonant) {
    let value = 0;
    const alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
    if (consonant.length == 1) {
        return alphabet[consonant];
    } else {
        let elemArr = consonant.split("")
        for (let i = 0; i < elemArr.length; i++) {
            value += alphabet[elemArr[i]];
        }
        return value
    }
}

// console.log(highConsonantValue('strength'))

function toWeirdCase(string) {
    let weirdArr = []
    let lettersArr = string.split(' ');
    for (let i = 0; i < lettersArr.length; i++) {
        if (i > 0) {
            weirdArr.push(' ');
        }
        for (let j = 0; j < lettersArr[i].length; j++) {
            let letter = lettersArr[i][j]
            if (j % 2 == 0) {
                letter = letter.toUpperCase();
                weirdArr.push(letter)
            } else {
                letter = letter.toLowerCase();
                weirdArr.push(letter)
            }
        }
    }
}


let reverseWords = (str) => str.split(' ').reverse().join(' ');

function checkExam(array1, array2) {
    let points = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            points += 4;
        } else if (array2[i].length > 0 && array1[i] !== array2[i]) {
            points -= 1;
        }
    }
    return points < 0 ? 0 : points
}


function inAscOrder(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

// console.log(inAscOrder([1,6,10,18,2,4,20]));



const plusMinus = (arr) => {
    let positives = arr.filter(elem => elem > 0).length;
    let negatives = arr.filter(elem => elem < 0).length;
    let zeros = arr.length - (positives + negatives);

    positives = (positives / arr.length).toFixed(6);
    negatives = (negatives / arr.length).toFixed(6);
    zeros = (zeros / arr.length).toFixed(6);


    return `${positives}\n${negatives}\n${zeros}`

    //console.log(positives);
}

//console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

function twoNumberSum(array, targetSum) {
    console.log(array, targetSum);
    let sum = 0
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= array.length; j++) {
            if (array[i] === array[j]) {
                continue;
            }
            sum = array[i] + array[j];
            if (sum == targetSum) {
                console.log('ey');
                return [array[i], array[j]];
            }
        }
    }

    return [];

}

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));


function tournamentWinner(competitions, results) {
    let j = 0
    let winnerTeams = [];
    let currentTeam = [];
    for (let i = 0; i < competitions.length; i++) {
        results[j] = results[j] === 1 ? 0 : 1;
        updateScore(competitions[i][results[j]]);
        j++;
    }

    function updateScore(team) {
        let findTeam = winnerTeams.findIndex((value) => value.teamName === team);
        if (findTeam != -1) { // Team existe
            winnerTeams[findTeam].points += 3;
        } else {
            winnerTeams.push({ teamName: team, points: 3 });
        }
    }
    console.log(winnerTeams);

    winnerTeams.sort((a, b) => a.points - b.points);

    return winnerTeams[winnerTeams.length - 1].teamName;

}

function sortedSquaredArray(array) {
    let arr = array.map(value => {
        return value * value
    })

    return arr
}

//console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))

function nonConstructibleChange(coins) {
    let change = 0

    if (coins.length == 0) return 1
    coins.sort((a, b) => a - b);

    for (let i = 0; i < coins.length - 1; i++) {
        change += coins[i];
        if (change + 1 < coins[i + 1]) {
            return change + 1;
        }
    }
}

// console.log(nonConstructibleChange([1, 1, 1, 1, 1]));

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let triplets = []
    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let totalSum = array[i] + array[left] + array[right];
            if (totalSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (totalSum < targetSum) {
                left++;
            } else if (totalSum > targetSum) {
                right--;
            }
        }
    }

    triplets
    return triplets;

}

//console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))

function isPalindrome(string) {
    let stringReversed = string.split('').reverse();
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== stringReversed[i]) {
            return false;
        }
    }

    return true;

}

//console.log(isPalindrome('abcdcba'))

function caesarCipherEncryptor(string, key) {
    let arrayEncrypted = [];
    let letter = '';
    key = key % 26;
    for(let i = 0 ; i < string.length; i++) {
        let charCodeValue = string.charCodeAt(i);
        charCodeValue += key;
        if(charCodeValue <= 122) {
            letter = String.fromCharCode(charCodeValue);
            arrayEncrypted.push(letter);
        } else {
            letter = String.fromCharCode(97 + (charCodeValue % 122) - 1);
            arrayEncrypted.push(letter);
        }
    }

    return arrayEncrypted.join('');
  
}


caesarCipherEncryptor('xyz', 2);



