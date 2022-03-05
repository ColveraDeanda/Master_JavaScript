const inputCard = document.querySelector('#inputCard')
const inputDate = document.querySelector('#inputDate')
const inputCVV = document.querySelector('#inputCVV')

// Se ingresan los patrones de formato para cada input
const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###'

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault()
    handleInput(maskNumber, e.key, cardNumber)
    inputCard.value = cardNumber.join('')
});

inputDate.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault()
    handleInput(maskDate, e.key, dateNumber)
    inputDate.value = dateNumber.join('')
});

inputCVV.addEventListener('keydown', e => {
    console.log(e)
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault()
    handleInput(maskCVV, e.key, cvvNumber)
    inputCVV.value = cvvNumber.join('')
})




let handleInput = (mask, key, arr) => {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    if (key === 'Backspace') {
        arr.pop()
    } else {
        if (arr.length < mask.length) {
            if (numbers.includes(key)) {
                if (mask[arr.length] == '-' || mask[arr.length] == '/') {
                    arr.push(mask[arr.length], key)
                } else {
                    arr.push(key)
                }
            } else {
                alert('Por favor, solo ingresar numeros [0-9]')
            }
        } else {
            alert('No es posible ingresar mas numeros')
        }
    }

    console.log(arr)
}