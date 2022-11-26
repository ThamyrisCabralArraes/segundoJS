let situacao1 = document.querySelector('#situacao1');
let situacao2 = document.querySelector('#situacao2');
let situacao3 = document.querySelector('#situacao3');

let nota = 9;

if (nota >= 7) {
  situacao1.textContent = 'Aprovado';
} else if (nota >= 3) {
  situacao1.textContent = 'Recuperação';
} else {
  situacao1.textContent = 'Reprovado';
}

nota >= 7
  ? (situacao2.textContent = 'Aprovado')
  : (situacao2.textContent = 'Recuperação');

let nota2 = 'Recuperaçao';
switch (nota2) {
  case 'Aprovado':
    situacao3.textContent = 'Voce foi aprovado';
    break;

  case 'Recuperaçao':
    situacao3.textContent = 'Voce está em Recuperaçao';
    break;

  default:
    situacao3.textContent = 'Voce foi reprovado';
}
