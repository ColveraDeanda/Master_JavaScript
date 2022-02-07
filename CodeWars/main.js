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
    if(splitted.length == 1) {
        splitted = str.split('_')
    }
    let firstWord = splitted.shift()
    let firstLetterUpper = splitted.map(item => item[0].toUpperCase() + item.slice(1))
    return firstWord + firstLetterUpper.join('')
}
















