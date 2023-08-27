const prompt = require("prompt-sync")({singint:true})

function validateAge(age) {
    const YOUNG_AGE = 18;
    const ADULT_AGE = 21;

    if(age < 0) {
        console.log("Error, edad inválida.");
        return;
    }
    if(age%2 != 0)   console.log("¿Sabías que tu edad es impar?.");

    if(age > YOUNG_AGE) {
        if(age < ADULT_AGE)
            console.log("Puede pasar al bar, pero no puede tomar alcohol.")
        else {
            if(YOUNG_AGE===ADULT_AGE)   console.log("Felicidades, bienvenido a la mayoría de edad.");
            console.log("Puede pasar al bar y tomar alcohol.");
        }
    }
    else console.log("No puede pasar al bar.");
}

function totalToPay(vehicles, litersConsumed){
    const TAX_0_TO_25 = 50;
    const TAX_MORE_THAN_25 = 25;
    const PRICE_CAR = 86;
    const PRICE_MOTORCYCLE = 70;
    const PRICE_BUS = 55;

    let price;
    switch (vehicles.toLowerCase()){
        case "carro":
            price = PRICE_CAR;
            break;
        case "moto":
            price = PRICE_MOTORCYCLE;
            break;
        case "autobus":
            price = PRICE_BUS;
            break;
    }

    price *= litersConsumed;

    if(litersConsumed > 0 && litersConsumed <= 25)
        price += TAX_0_TO_25;
    else if(litersConsumed > 25)
        price += TAX_MORE_THAN_25;

    return price;
}

function getTotalPrice(base, bread, additionals){
    let price = 0;
    const ADDITIONALS_PRICES = [20, 15, 10, 15, 5, 5];
    switch(base.toLowerCase()){
        case "pollo":
            price = 150;
            break;
        case "carne":
            price = 200;
            break;
        case "veggie":
            price = 100;
            break;
    }

    switch(bread.toLowerCase()){
        case "blanco":
            price += 50;
            break;
        case "negro":
            price += 60;
            break;
        case "s/gluten":
            price += 75;
            break;
    }

    additionals.forEach((additional, indice) => {if(additional) price += ADDITIONALS_PRICES[indice];})
    return price;
}

function guessNumber(number){
    let message = "¡Felicidades encontraste el número secreto!";
    let randomNumber = Math.floor(Math.random()*10);
    randomNumber===0?randomNumber++:randomNumber;
    if(number!==randomNumber)
        message = `Lo siento, perdiste esta ronda, tu número es el: ${number} y el numero secreto era el: ${randomNumber}`; 
    return message;
}

function openParachute(speed, height){
    let open;
    const MIN_SPEED = 1000;
    const RANGE_HEIGHT = [2000, 3000];
    if(speed < MIN_SPEED)
        if(height >= RANGE_HEIGHT[0] && height < RANGE_HEIGHT[1])
            open=true;
    return open;
}

function translateWord(word){
    const dictionary = {
        "casa":"house",
        "perro":"dog",
        "pelota":"ball",
        "arbol":"tree",
        "genio":"genius"
    }
    return dictionary[word];
}

function rateMovie(rate){
    const response = {
        "muy mala":"Calificaste la película como Muy Mala. Lo lamentamos mucho.",
        "mala":"Calificaste la película como Mala. Lo lamentamos mucho.",
        "mediocre":"Calificaste la película como Mediocre. Lo lamentamos.",
        "buena":"Calificaste la película como Buena. Agradecemos tu visita.",
        "muy buena":"Calificaste la película como Muy buena. Agradecemos mucho tu visita.",
        "default":"Ingresaste un valor inválido."
    }

    switch(rate.toLowerCase()){
        case "muy mala": case "mala": case "mediocre": case "buena": case "muy buena":
            return response[rate.toLowerCase()];
        default:
            return response["default"];
    }
}

function test_validaEdad(){
    let edad = parseInt(prompt("Ingresa tu edad: "));
    validateAge(edad);
}

function test_calculaPrecioCombustible(){
    let vehiculo = prompt("Ingresa el vehículo (carro, moto o autobus): ");
    let litros = parseInt(prompt("Ingresa los litros comprados: "));
    console.log(`Vehículo: ${vehiculo}, litros: ${litros}, total a pagar: $` + totalToPay(vehiculo, litros));
}

function test_calculaPrecioComida(){
    let base = prompt("Ingresa la base de tu sandwitch (pollo, carne, veggie): ");
    let pan = prompt("Ingresa el tipo de pan (blanco, negro, s/gluten): ")
    const ingredientes = ["Queso", "Tomate", "Lechuga", "Cebolla", "Mayonesa", "Mostaza"];
    let extras = [];
    ingredientes.forEach(ingrediente => {
        extras.push((prompt("Deseas agregar " + ingrediente + "? Responde 'si' o 'no': ")==="si")?true:false);
    })
    console.log("Total a pagar por el sandwitch: $" + getTotalPrice(base, pan, extras));
}

function test_encuentraElNumero(){
    console.log(guessNumber(parseInt(prompt("Ingresa un numero entre 1 y 10: "))));
}

function test_puedeAbirParacaidas(){
    let velocidad = parseInt(prompt("Ingresa la velocidad: "));
    let altura = parseInt(prompt("Ingresa la altura: "));
    console.log(openParachute(velocidad, altura)?"Puedes abrir el paracaídas":"No puedes abrir el paracaídas");
}

function test_traducePalabra(){
    console.log("Traducción: " + translateWord(prompt("Ingresa palabra a traducir (casa, perro, pelota, arbol, genio): ")));
}

function test_evaluaPelicula(){
    console.log(rateMovie(prompt("Ingresa tu valoración de la película: ")));
}

function test(){
    test_validaEdad(); 
    test_calculaPrecioCombustible(); 
    test_calculaPrecioComida(); 
    test_encuentraElNumero();
    test_puedeAbirParacaidas();
    test_traducePalabra();
    test_evaluaPelicula();
}

test();