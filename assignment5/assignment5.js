const number = Number(prompt('Enter a number'))

let sum = 0;
for (let i =1; i <= number; i++) {
  sum = sum + i;
}
document.write('Sum: ' + sum);
console.log(sum);
