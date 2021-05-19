function Addition(){
    let number1=+document.getElementById('Number1').value;
    let number2=+document.getElementById('Number2').value;

    result=number1+number2;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Subtraction(){
    let number1=+document.getElementById('Number1').value;
    let number2=+document.getElementById('Number2').value;

    result=number1-number2;
    document.getElementById('result').innerHTML = "Result Subtraction: " + result;
}

function Mutiplication(){
    let number1=+document.getElementById('Number1').value;
    let number2=+document.getElementById('Number2').value;

    result=number1*number2;
    document.getElementById('result').innerHTML = "Result Mutiplication: " + result;
}

function Division(){
    let number1=+document.getElementById('Number1').value;
    let number2=+document.getElementById('Number2').value;

    result=number1/number2;
    document.getElementById('result').innerHTML = "Result Division: " + result;
}
