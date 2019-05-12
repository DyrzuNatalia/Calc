function plus() {
 var number1, number2, resalt;
 number1 = document.getElementById("number1").value;
 number1 = parseInt(number1);

 number2 = document.getElementById("number2").value;
 number2 = parseInt(number2);

 result = number1 + number2
 document.getElementById("out").value = result;

}
function multiply() {
    var number1, number2, resalt;
    number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);
   
    number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);
   
    result = number1 * number2
    document.getElementById("out").value = result;
   
   }
   function minus() {
    var number1, number2, resalt;
    number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);
   
    number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);
   
    result = number1 - number2
    document.getElementById("out").value = result;
   
   }
   function divide() {
    var number1, number2, resalt;
    number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);
   
   
    number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);
   
    result = number1 / number2
    document.getElementById("out").value = result;
   
   }

  

function prov_calc() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var num1_pattern=/[0-9]+/i;
  var num2_pattern=/[0-9]+/i;
  var prov=num1_pattern.test(num1);
  var provNum2=num2_pattern.test(num2);

  if (prov==true && provNum2==true ) {     
  }
  else {
        alert("Не число!");
  }
}

function prov_divide() {
    var num2 = document.getElementById("number2").value;
    var num2_pattern1= /^[1-9]\d*$/;
    var prov=num2_pattern1.test(num2);
    
    if (prov==true) {     
    }
    else {
          alert("Не корректные данные!");
    }
  }
  function provDivideZero() {
    var num2 = document.getElementById("number2").value;
    var num2_pattern1 = /0/;
    var prov=num2_pattern1.test(num2);
    
    if (prov == true) { 
        alert("На 0 делить нельзя!");    
    }
    
  }
function myFunction(){
    prov_calc();
    plus();
}
function myFunctionDivide(){
    provDivideZero();
    prov_divide();
    divide();
}
function myFunctionMinus(){
    prov_calc();
    minus();
}
function myFunctionMultiply(){
    prov_calc();
    multiply();
}
document.getElementById("err").onclick = myFunction;
document.getElementById("err1").onclick = myFunctionDivide;
document.getElementById("err_minus").onclick = myFunctionMinus;
document.getElementById("err_multiply").onclick = myFunctionMultiply;
