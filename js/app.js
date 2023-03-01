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
document.getElementById('submit_ID').addEventListener('click',function()
{
    const generateFiled = document.getElementById('display_input_filed');
    const generatedisplay = generateFiled.value;

    const calculatorFiled = document.getElementById('calculator_display');
    const calculatordisplay = calculatorFiled.value;

    const succesID = document.getElementById('succes_ID');
    const failed = document.getElementById('failed_ID');

    if(generatedisplay == calculatordisplay)
    {
        
        succesID.style.display = 'block';
        failed.style.display = 'none';
    }
    else
    {
       
        failed.style.display = 'block';
        succesID.style.display = 'none';
    }


   
})