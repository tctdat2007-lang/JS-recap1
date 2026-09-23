const number = Number(prompt('Enter a positive integer:'));

document.write('<table>');

for (let row = 1; row <= number; row++) {
  document.write('<tr>');

  for (let column = 1; column <= number; column++) {
    const result = row * column;
    document.write('<td>' + result + '</td>');
  }

  document.write('</tr>');
}

document.write('</table>');
