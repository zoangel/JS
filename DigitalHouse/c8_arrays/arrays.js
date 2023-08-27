let movies = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let newMovies = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function arrayToUpperCase(array){
    let newArray = []
    array.forEach(element => { 
        newArray.push(element.toUpperCase());
    });
    return newArray;
}

function addArrayToArray(array, arrayToAdd){
    let arrayWithAllMovies = [].concat(array).concat(arrayToAdd);
    arrayWithAllMovies = arrayToUpperCase(arrayWithAllMovies);
    return arrayWithAllMovies;
}

function deleteLastElement(array){
    return array.pop();
}

function compareScores(scores1, scores2){
    scores1.forEach((element, index) => {
        if(element === scores2[index])
            console.log("Este score es el mismo.");
        else console.log("Los scores son diferentes.")
    })
}

function printReverseArray(array){
    let reverseArray = [].concat(array).reverse();
    return reverseArray;
}

function getReverseArray(array){
    return array.reverse();
}

function sumArray(array){
    let total = 0;
    array.forEach(element => {
        total+=element;
    })
    return total;
}

function join(arrayToJoin){
    let stringResult = '';
    arrayToJoin.forEach(element => {stringResult = stringResult.concat(element);});
    return stringResult;
}

function test(){
    console.log(arrayToUpperCase(movies));
    let nuevoArray = addArrayToArray(movies, newMovies);
    console.log(nuevoArray);
    console.log("Elemento eliminado: " + deleteLastElement
    (nuevoArray));
    console.log(`Nuevo valor de peliculas ${nuevoArray}`);
    compareScores(asiaScores, euroScores);

    let arrayOriginal = [1,2,3,4,5,6,7,8,9,10];
    console.log(`Array original: ${arrayOriginal}`);
    console.log(`Array en reversa: ` + printReverseArray(arrayOriginal));
    console.log(`Array original: ${arrayOriginal}`)
    getReverseArray(arrayOriginal);
    console.log(`Ahora array original: ${arrayOriginal}`);

    let sumatoria = sumArray([10,20,30]);
    console.log(`Total sumatoria: ${sumatoria}`);

    let caracteres = join(["h","o","l","a"]);
    console.log(`Palabra concatenada: ${caracteres}`);
}

test();