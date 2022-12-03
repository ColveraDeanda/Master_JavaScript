let arr = [70,4,7,10,50,3,8,9];

console.log(arr)

arr.push(100);
arr
arr.pop();
arr

arr.forEach((value, index, arr) => {
    console.log(value)
    console.log(index);
})
// High Order functions
// Map
let newArr = arr.map(number => {
    return number * 2;
});
console.log(newArr);

let newArr2 = arr.filter(number => {
    return number > 5;
});
console.log(newArr2);

let newAr3 = arr.reduce((acc, value) => {
    return acc * value;
}, 1);
console.log(newAr3);

arr
let arrToString = arr.join('/');
console.log(typeof arrToString);
console.log(arr[arr.length - 1]);


arr.sort((a,b) => a - b);
arr

arr.splice(3, 0, 10000);
arr


let string = 'Veronica Bulmosa Manzanita'

let stringToArray = string.split('');

string.toLowerCase();
string.toUpperCase();

let sliceString = string.slice(8);
console.log(sliceString);

let stringReplaced = string.replace('Manzanita', 'MiBB');
console.log(stringReplaced);

console.log(string.length);
let trimString = string.trim();
console.log(trimString.length);

if(string != null && isNaN(string)) {
    console.log('hola');
}

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

let names = [];
contacts.forEach(contact => {
    names.push(contact.firstName);
})
names


// Spread Operator & Rest Operator
function getName(name='VeroLindura') {
    console.log(name);
}
getName()

function getNumbers(phone, ...numbers) {
    console.log(phone);
    console.log(numbers);
}

getNumbers(345353454, 1,2,3,4,6,6,6,6,6,6,6,6)


function anotherFunc(nombre) {
    console.log([...nombre]);
    [...nombre].map(letter => {
        return letter.toUpperCase();
    })
}

anotherFunc('Bulma');

numbers = [45,56,889, 34];
console.log(Math.min(...numbers));

const myObj = {
    name: 'VeroBot',
    hobbie: 'Xbox',
    nobio: 'CrisBot'
}

const {name, hobbie, nobio} = myObj;
console.log(name, hobbie, nobio);

function objFunction({name, hobbie}) {
    console.log(name, hobbie);
}

objFunction(myObj);








