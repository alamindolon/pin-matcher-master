function getPin()
{
    const pin = genarelPin();
    const pinString = pin + '';
    if(pinString.length === 4)
    {
        return pin;
    }
    else{
        return getPin();
    }
    
}

function genarelPin()
{
    const random = Math.round(Math.random()*10000)
    return random;
   
}


document.getElementById('genarate_pin_ID').addEventListener('click',function()
{
    const pinGenaral = getPin();

    const displayFiled = document.getElementById('display_input_filed');
    displayFiled.value =pinGenaral;

   
})

document.getElementById('calculator').addEventListener('click',function(event){
   const number =  event.target.innerText

   const calculatordisplay = document.getElementById('calculator_display');
   const previsasNumber = calculatordisplay.value;

    if(isNaN(number))
    {
        if(number == 'C')
        {
            calculatordisplay.value = '';
        }
        else if(number == '<') {
            const digit = previsasNumber.split('');
           digit.pop();
           const remainvalue = digit.join('');
           calculatordisplay.value = remainvalue;

        }
    }
    else{
        
        const newNumber = previsasNumber + number;
        calculatordisplay.value = newNumber;
       
    }


})