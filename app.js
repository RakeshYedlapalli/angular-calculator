var app = angular.module("calculatorApp",[]);
app.controller("calculatorController",calculateSomething)

function calculateSomething(){

    this.ButtonClicked = function(button){
        this.selectedOperation = button;
    }

   

    this.calculateTheValue  = function(){
        var number1 = parseFloat(this.firstValue)
        var number2 = parseFloat(this.secondValue)
        if(this.selectedOperation === '+'){
            this.result = number1+number2;
        }

        if(this.selectedOperation === '-'){
            this.result = number1-number2;
        }

        if(this.selectedOperation === '*'){
            this.result = number1*number2;
        }

        if(this.selectedOperation === '/'){
            this.result = number1/number2;
        }
    }
}