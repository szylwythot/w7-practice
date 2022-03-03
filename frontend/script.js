function init(mathFunction){
    var a = 5;
    var b = 6;
    
    if(a < b){
        let c = mathFunction(b, a);
        console.log(c);
    }
    else{
        let c = mathFunction(a, b);
        console.log(c);
    }
    
}

const initC = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const initD = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

init(initD);