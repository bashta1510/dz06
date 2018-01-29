//const number = parseInt(prompt('number of Fibonacci:'));
//function fib(number) {
//  return number <= 1 ? number : fib(number - 1) + fib(number - 2);
//}
//document.write( fib(number) );



function fib(number) {
    if (number == 1 || number == 2) {
        return 1;
    } else {
        return fib(number - 2) + fib(number - 1);
    }
}
const userNumber = parseInt(prompt('Enter Fibonacci number'));
document.write(fib(userNumber));
