function calculator(){
    // let add,sub,mul,div,;
    let number1=parseInt( prompt("Enter your first number"))
    let number2=parseInt( prompt("Enter your second number"))
    let operator= prompt("Enter the operation you want to perform")

    if(operator=="+")
        console.log(number1+number2)
    else if(operator=="-")
        console.log(number1-number2)
    else if(operator=="*")
        console.log(number1*number2)
    else if(operator=="/")
        console.log(Math.floor(number1/number2))
    else
        alert("please enter valid operator")



}
calculator()