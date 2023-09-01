function loopPairs(addNumber){
    for(let i=0; i<=100; i++){
        let temp = addNumber + i;
        if(temp%2==0)
            console.log("El numero " + (temp) + " es par");
    }
}

function loopShowWordImpair(addNumber, wordImpair){
    for(let i=0; i<=100; i++){
        let temp = addNumber + i;
        if(temp%2!=0)
            console.log(temp + " " + wordImpair);
    }
}


function sum(number){
    let resultSum = 0;
    while(number>0){
        resultSum += number;
        number--;
    }
    return resultSum;
}

function newArray(number){
    let newArray = [];

    for(let i=1; i<=number; i++){
        newArray.push(i);
    }
    return newArray;
}

function split(string){
    let arraySplitString = [];

    for(let i=0; i<=string.length; i++){
        arraySplitString.push(string.charAt(i));
    }
    return arraySplitString;
}

function arrayHandler(firstArray, secondArray){

    for(let i=0; i<firstArray.length; i++){
        console.log("Soy " + firstArray[i] + " y yo soy " + secondArray[i]);
    }
}

function palindrome(string){
    let isPalindrome = true;
    let newString = string.toLowerCase();
    let arrayOfString = newString.split("");
    let arrayReverse = [];

    console.log(arrayOfString);
    for(let i=arrayOfString.length-1; i>=0; i--){
        arrayReverse.push(arrayOfString[i]);
    }

    for(let i = 0; i<arrayOfString.length; i++){
        if(arrayOfString[i] !== arrayReverse[i]){
            isPalindrome = false;
            break;
        }
    }

    console.log(arrayReverse);
    return isPalindrome;
}

function test(){
    loopPairs(50);
    loopShowWordImpair(50, "Este numero es impar");
    console.log("Total: " + sum(5));
    console.log(newArray(10));
    console.log(split("HOLA ANGEL"));
    let unArray = [1,2,3,4,5,6];
    let otroArray = ["1","q","u","e","s","o"];
    arrayHandler(unArray, otroArray);
    console.log("Ana es palindromo: " + palindrome("Ana"));
    console.log("anilina s palindromo: " + palindrome("anilina"));
    console.log("casa es palindromo: " + palindrome("casa"));
}

test();