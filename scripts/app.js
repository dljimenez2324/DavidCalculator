
// ADD BACK BUTTON
// Go to line  120  for backspace code

// See below for pseudocode for backspace
// What it must do is you click the back button and it erases the last character of the display area, erasing the last number appended to the number that is being created so it will need to be in both number creations 
// we need to make a button with document.getElementById("btnBackspace")
// we will need an event listener  like  btnBackspace.addEventListener("click", function(){ backspaceCalc(); }
// we will need a function         function backspaceCalc(){}

// See if can add squared and square root functions

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let btnDivide = document.getElementById("btnDivide");
let btnEqual = document.getElementById("btnEqual");
let btnClear = document.getElementById("btnClear");

// added backspace button   not included (square button and square root button)
let btnBackspace = document.getElementById("btnBackspace");


//let btnSquare = document.getElementById("btnSquare");
//let btnSquareRoot = document.getElementById("btnSquareRoot");

let displayArea = document.getElementById("displayArea");
let myPage = document.getElementById("myPage");

let stringNumber = "";
let operatorSaved = "";

let num1 = 0;
let num2 = 0;
let result = 0;


// lets test our buttons to see if they work
// The following function dictates the behavior of our number keys
function numberPress(btnNum){

    // check if we completed a number
    if(result !=0){
        resetCalc();
    }

    //this will take the empty string build upon itself appended and then shows us in console log
    stringNumber += btnNum;
    console.log(stringNumber);
    
    // after pressing a button update the display
    updateDisplay();
}

// operation pressed and saved to variable
function opPress(op){
    // if our result is NOT 0, we can assume we are trying to continue doing math with our current result as the first number
    if(result !=0){
        operatorSaved = op;
        num1 = result;  // this converts stringnumber to a number implicitly since we defined num1 as a number by initializing it as a number
        stringNumber = "";
        result = 0;
    }
    // if we have our first number and have NOT started building our second number, change the operator
    else if(num1 != 0 && stringNumber == ""){
        operatorSaved = op;
    }
   
    // if we have our first number and we have started building the second number, we want to "do math" and then continue on with our new operation
    else if(num1 !=0 && stringNumber != ""){
        doMath();
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    // by process of elimination we know that we were just building our 1st number and need to save it to continue on to building our second number
    else{
        operatorSaved = op;
        num1 = Number(stringNumber);  // this converts stringnumber to a number
        stringNumber = "";
    }
    
    updateDisplay();
}

// this will show our inputs on the display
function updateDisplay(){
    //displayArea.innerText = stringNumber;

    if(operatorSaved == ""){
        displayArea.innerText = stringNumber;
    }
    else{
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber;
    }
}

// this function clears out the saved values so we start over completely
function resetCalc(){
     stringNumber = "";
     operatorSaved = "";
     num1 = 0;
     num2 = 0;
     result = 0; 
     updateDisplay();
}

// clearing button
btnClear.addEventListener("click", function(){
    resetCalc();
});


// ADDING BACKSPACE BUTTON HERE
// This will work for all situations except after pressing the equal size similar to how a regular calculator works
// Remove the last character from the string using this syntax array.slice(start, end) for start parameter we will use 0 for start of the word and -1 to select the end of the word.   Slice works for words and arrays and will not change the original array / word except the last character for our situation
// see examples from https://www.w3schools.com/jsref/jsref_slice_array.asp
btnBackspace.addEventListener("click", function(){
    // Check if there is anything to backspace
    if (stringNumber.length > 0) {
        // remove last character
        stringNumber = stringNumber.slice(0, -1);
        updateDisplay();
    }
});

// ADDing square event listener and doMath operation   DO NOT ADD YET

// ADDing square root listener and function using Math.sqrt()   DO NOT ADD YET

function doMath(){
    num2 = Number(stringNumber);
    stringNumber = "";
    switch(operatorSaved){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;   
        // case "x²":
        //     result =  ;
        //  after conversation with instructors
    }
}

// equal event listener
btnEqual.addEventListener("click", function(){
    doMath();
    displayArea.innerText = result;
    
    // Neo and I found that if we did not add the code below, our string number would continue to append onto the calculation that was just done  ex 12-12 = 0  ----> 12-1235   35 would be added to the end as shown
    stringNumber = "";
    operatorSaved = "";
    num1 = 0;
    num2 = 0;
});

// return press down for equals event listener
myPage.addEventListener("keypress", function(event){
    if(event.key = "Enter"){
        doMath();
        displayArea.innerText = result;
    }
});


// number events
btn0.addEventListener("click", function(){
    numberPress("0")
});
btn1.addEventListener("click", function(){
    numberPress("1")
});
btn2.addEventListener("click", function(){
    numberPress("2")
});
btn3.addEventListener("click", function(){
    numberPress("3")
});
btn4.addEventListener("click", function(){
    numberPress("4")
});
btn5.addEventListener("click", function(){
    numberPress("5")
});
btn6.addEventListener("click", function(){
    numberPress("6")
});
btn7.addEventListener("click", function(){
    numberPress("7")
});
btn8.addEventListener("click", function(){
    numberPress("8")
});
btn9.addEventListener("click", function(){
    numberPress("9")
});


// operator event listener
btnPlus.addEventListener("click", function(){
    opPress("+");
});
btnMinus.addEventListener("click", function(){
    opPress("-");
});
btnMulti.addEventListener("click", function(){
    opPress("*");
});
btnDivide.addEventListener("click", function(){
    opPress("÷");
});
