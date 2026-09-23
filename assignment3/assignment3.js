const side1 = Number(prompt('Enter side 1:'));
const side2 = Number(prompt('Enter side 2:'));
const side3 = Number(prompt('Enter side 3:'));

if (side1 === side2 && side2 === side3) {
  document.write('The triangle is equilateral.');
} else if (
  side1 === side2 ||
  side1 === side3 ||
  side2 === side3
) {
  document.write('The triangle is isosceles.');
} else {
  document.write('The triangle is scalene.');
}
