function checkParity(parity, bin){
    let arr = bin.toString().split('')
    let bin_filter = arr.filter(item => item == "1")
    if(parity == 'even') {
        return bin_filter.length % 2 == 0 ? 0 : 1
    } else {
        return bin_filter.length % 2 != 0 ? 0 : 1
    }
  }

function absentVowel(string){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let str_array = string.split('')
    for(let i = 0; i < str_array.length; i++) {
        for(let j = 0; j < vowels.length; j++){
            if(str_array[i] == vowels[j]) {
                vowels.splice(vowels.indexOf(vowels[j]), 1)
                break;
            }
        }
    }
    switch(vowels[0]){
        case 'a': return 0;
        case 'e': return 1;
        case 'i': return 2;
        case 'o': return 3;
        case 'u': return 4;
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"))