function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('dont found');
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
    
    
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const numberField = document.getElementById('typed-numbers');
    const previousNumber = numberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            numberField.value = '';
        }
        else if(number === '<'){
            const cutnumber = previousNumber.split('');
            cutnumber.pop();
            const remaining = cutnumber.join('');
            numberField.value = remaining;
        }
    }
    else{
        const newNumber = previousNumber + number;
        numberField.value = newNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin');
    const pinValue = displayPin.value;

    const numberField = document.getElementById('typed-numbers');
    const typedValue = numberField.value;
    const successful = document.getElementById('successful');
    const wrong = document.getElementById('wrong');
    
    if(typedValue === pinValue){
        successful.style.display = 'block';
        wrong.style.display = 'none';
    }
    else{
        wrong.style.display = 'block';
        successful.style.display = 'none';
    }
})