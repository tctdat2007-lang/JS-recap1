const celsius = Number(prompt('Enter a celsius number:'));

const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

document.write('Fahrenheit: ' + fahrenheit + '<br>');
document.write('Kelvin: ' + kelvin);

