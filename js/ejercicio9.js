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

let frase = prompt("Escribe una frase");
let nfrase = frase.length;
for (let i = 0 ; i < frase.length ; i++){
    if(frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u")
document.write( frase.substr(i, (1)) );
 }