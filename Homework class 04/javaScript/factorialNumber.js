$(document).ready(function () {
function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
let num = prompt('Enter a positive number: ');
if (num <= 0 || isNaN(num) || num == undefined) {
    alert('Please enter  a positive number.');
}
else {
    let result = factorial(num);
    $("#result").append(`The factorial of ${num} is ${result}`)
    
}
})