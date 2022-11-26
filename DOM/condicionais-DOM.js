let situacao1 = document.querySelector('#situacao1');
let situacao2 = document.querySelector('#situacao2');
let situacao3 = document.querySelector('#situacao3');

let nota = 2;

if (nota >= 7) {
  situacao1.textContent = 'Aprovado';
} else if (nota >= 3) {
  situacao1.textContent = 'Recuperação';
} else {
  situacao1.textContent = 'Reprovado';
}
