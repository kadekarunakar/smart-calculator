function calculate(a,b,operator){
    //a,b are operands
    //operator is operator(+,-,/,%,*,**)

    if(operator==="+"){
        return `the sum of '${a}' and '${b}' is ${a+b}`;
    }
    else if(operator==="-"){
        return `the subtraction of '${a}' and '${b}' is ${a-b}`;
    }
    else if(operator==="*"){
        return `the multiplication of '${a}' and '${b}' is ${a*b}`;
    }
    else if(operator==="/"){
        if(b===0){
            return "zero cannot be the denonemator";

        }
        return `the division of '${a}' and '${b}' is ${a/b}`;
       
    }
    else if(operator==="%"){
        if(b===0){
            return "zero cannot be the denonemator"
        }
        return `the modulo of '${a}' and '${b}' is ${a%b}`;
    }
    else if(operator==="**"){
        return `the  '${a}' power of '${b}' is ${a**b}`;
    }
    else{
        return "enter the correct operands (+,-,*,/,%,**)";
    }
}
console.log(calculate(2,4,'+'))
