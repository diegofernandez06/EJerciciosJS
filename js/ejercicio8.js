let divisible=parseInt(prompt("Ingrese un numero"));

if(divisible%2==0){
    document.write("<br>EL numero ingresado si es divisble en 2");
}else{
    document.write("<br>El numero ingresado no es divisble en 2 dado que el resto de la division es: "+(divisible%2));
}