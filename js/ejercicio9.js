/*document.write("<br>Ejercico 9<br>");

let str=prompt("Ingrese una frase");
let vocal="";

for(let i=0; i<str.length; i++){
    vocal=str.substr(i,1);
    if(vocal==="a"){
        document.write(" "+vocal);
    }else if(vocal==="e"){
        document.write(" "+vocal);
    }else if(vocal==="i"){
        document.write(" "+vocal);
    }else if(vocal==="o"){
        document.write(" "+vocal);
    }else if(vocal==="u"){
        document.write(" "+vocal);
    }
}*/

let frase = prompt("ingrese una frase");


console.log(frase);
console.log(frase.length);
console.log(frase.charAt(1));

//tpUppercase , toLowercase

for(let posicion = 0; posicion  < frase.length; posicion++ ){
    if(frase.charAt(posicion) =="a" || frase.charAt(posicion) =="e" || frase.charAt(posicion) =="i" || frase.charAt(posicion) =="o" || frase.charAt(posicion) =="u"){
        document.write(frase.charAt(posicion))
    }
}