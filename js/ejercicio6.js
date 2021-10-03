console.log("hola mundo");

document.write("Hello word")

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numero1 = parseInt(prompt("ingrese un numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));

console.log(numero1)
console.log(numero2)

if(numero1 > numero2){
    // numeor uno es mayor
    document.write("<br>el numero 1 es mayor que el numero 2 -"+numero1);

} 
//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

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

//8.- Escribe un programa que pida un número y diga si es divisible por 2 

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen