//Pegando o numero atual do html em forma de span
var currentNumberWrapper = document.getElementById('currentNumber');
//
var currentNumber = 0;


function increment(){
    currentNumber = currentNumber+1;
    //O valor que esta dentro do html sera alterado para o da variavel current 
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber>=0){
        document.getElementById('currentNumber').style.color = 'green';
    }
}
function decrement(){
    currentNumber = currentNumber-1;
    //O valor que esta dentro do html sera alterado para o da variavel current 
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber<0){
        document.getElementById('currentNumber').style.color = 'red';
    }
}