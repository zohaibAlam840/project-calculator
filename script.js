let firstOperand = ''
let secondOperand = ''
let currentOpration = null

let calDisplayScreen = document.querySelector(".currentDisplay");
let calprevDisplayScreen = document.querySelector(".prevDisplay")
let calOperator = document.querySelectorAll(".operator")
let calnumber = document.querySelectorAll(".operand")
let decimalPoint = document.querySelector("#decimal")
let equal = document.querySelector("#equal")
let cleanButton = document.querySelector("#clean");

equal.addEventListener("click",()=>equalFunction())
cleanButton.addEventListener("click",()=>{
    calDisplayScreen.textContent = '';
    calprevDisplayScreen.textContent = '';
    firstOperand = ''
    secondOperand = ''
    currentOpration = null
})
calnumber.forEach((button)=>{
    button.addEventListener("click", () =>setNumberDisplay(button.textContent));
})
calOperator.forEach((opration)=>{
    opration.addEventListener("click",()=>setOpration(opration.textContent))
})
function setNumberDisplay(numbers){
    if(calDisplayScreen.textContent === '0')resetScreen()
    calDisplayScreen.textContent += numbers 
}
function resetScreen(){
    calDisplayScreen.textContent = ''
}
function setOpration(operator){
    if(currentOpration !== null) evaluate()
    firstOperand = calDisplayScreen.textContent
    currentOpration = operator
    calprevDisplayScreen.textContent = `${firstOperand}${currentOpration}`
    resetScreen()
}
function evaluate(){  
    secondOperand = calDisplayScreen.textContent;
    calDisplayScreen.textContent = operator(currentOpration,firstOperand,secondOperand) 
    firstOperand = calDisplayScreen.textContent;
    currentOpration = null
}
function equalFunction(){
    firstOperand=operator(currentOpration,firstOperand,calDisplayScreen.textContent)
    calprevDisplayScreen.textContent = firstOperand 
    resetScreen()
}

function operator(operator,num1,num2){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch(operator){
        case "+":
            return num1 + num2 

        case "-":
            return num1 - num2

        case "/":
            return num1 / num2

        case "*":
            return num1 * num2 
    }
}

