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
//onesComplement(1001) 


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

function binaryToNumber(arr){
    return parseInt(arr.join(''), 2)
    

}
console.log(binaryToNumber([1, 1, 1, 1]))
























