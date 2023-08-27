const prompt = require("prompt-sync")({singint: true})

function getNextTenNumbers(startingNumber){
    for(let i=0; i<10; i++){
        console.log(`Número siguiente: ${++startingNumber}`);
    }
}

function printNumberByThirds(startingNumber, finalNumber){
    while(startingNumber<finalNumber){
        console.log(`--> ${startingNumber}`)
        startingNumber+=3;
    }
}

function getSum_0_to_100(){
    let sum = 0;
    for(let i=0; i<=100; i++){
        sum+=i;
    }
    return sum;
}

function getFactorial(number){
    let result;
    if(number<0)
        return;
    
    for(let i=0; i<=number; i++){
        if(i===0 || i===1)
            result=1;
        result *= i;
    }
    
    return result;
}

function getFibonacci(number){
    let result = [];
    if(number<0)
        return;

    for(let i = 0; i<=number; i++){
        if(i===0 || i===1){
            result.push(i);      
            if(i===1)
                result.push(result[i-1] + result[i]);
        }
        else result.push(result[i-1] + result[i]);

    }
    return result;
}


function test(){
    getNextTenNumbers(10);
    printNumberByThirds(0, 29);
    console.log(getSum_0_to_100());
    console.log(getFactorial(10));
    console.log(getFibonacci(10));
}

test();