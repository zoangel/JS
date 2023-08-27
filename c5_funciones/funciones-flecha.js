const prompt = require("prompt-sync")({singint:true})
const INCHES_VALUE_IN_CM = 2.54;
const HUMAN_DOG_AGE = 7;
const HOURS_PER_MONTH = 40;
const PROTOCOL = "http";
const DOMAIN = "com";

let convertInchesToCentimeters = inches => inches * INCHES_VALUE_IN_CM;

let getUrl = bodyUrl => `${PROTOCOL}://www.${bodyUrl}.${DOMAIN}`;

let getExclamationPhrase = phrase => phrase.concat('!');

let getDogAge = age => age * HUMAN_DOG_AGE;

let getValueByHour = salary => salary / HOURS_PER_MONTH;

let getIMC = (height, weight) => height / (weight * weight);

let stringToUpperCase = text => text.toString().toUpperCase();

let getTypeOf = param => typeof param;

let getCircumference = radio => Math.PI * Math.pow(radio, 2);


function test(){
    let pulgadas = prompt("Ingresa el numero de pulgadas a convertir: ");
    console.log(pulgadas + "in = " + convertInchesToCentimeters(pulgadas) + "cm.");
    
    let cadena = prompt("Ingrese una cadena para generar una url: ");    
    console.log("URL: " + getUrl(cadena));   
    
    let frase = prompt("Escribe una frase: ");
    console.log(getExclamationPhrase(frase));
    
    let edad = parseInt(prompt("Ingresa la edad de tu perro: "));
    console.log("La edad de tu perro en años humanos es : " + getDogAge(edad));
    
    let salario = prompt("Ingresa tu salario mensual: ");
    console.log("Valor por hora: $" + getValueByHour(salario));
    
    let altura = parseFloat(prompt("Ingresa tu altura: "));
    let peso = parseFloat(prompt("Ingresa tu peso: "));
    console.log("Su IMC es: " + getIMC(altura, peso));

    let text = prompt("Ingresa frase para convertir en mayúsculas: ");
    console.log("Tu frase: " + stringToUpperCase(text));

    let valor = prompt("Ingresa un valor cualquiera: ");
    console.log("El valor es de tipo : " + getTypeOf(valor));

    let radio = parseInt(prompt("Ingresa el radio del círculo para obtener su circunferencia: "));
    console.log("Radio : " + radio + ", circunferencia: " + getCircumference(radio));
}

test();