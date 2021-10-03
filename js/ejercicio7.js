let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));
let numero3 = parseInt(prompt("ingrese un tercer numero"));

console.log(numero1);
console.log(numero2);
console.log(numero3);

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El primer numero es mayor " + numero1);
} else if (numero2 > numero3) {
  document.write("El segundo numero es mayor " + numero2);
} else if (numero1 == numero2 && numero2 == numero3) {
  document.write("Todos los numeros son iguales " + numero2);
} else {
  document.write("el tercer numero ingresado es mayo " + numero3);
}