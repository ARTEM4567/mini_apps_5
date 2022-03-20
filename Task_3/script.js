class Calculator{
    constructor(){
        this.a = Number(prompt('a?'));
        this.b = Number(prompt('b?'));
        this.object = {num1: this.a, num2: this.b}
    }

    sum(){
        console.log(this.object.num1 + this.object.num2);
    }

    null(){
        console.log(this.object.num1 * this.object.num2);
    }
}

let calc = new Calculator;
calc.null();