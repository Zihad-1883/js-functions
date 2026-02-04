let even = 'Even';
let odd = 'Odd';

function oddEven(num){
    if(num % 2 === 0){
        return even;
    }
    else{
        return odd;
    }
}

let num = 4;
console.log(oddEven(num));