/**
 * Created by Rakesh on 11/28/2016.
 */
$(document).ready(function(){

    //console.log('JQuery Hello');
    var exp = [];
    var decimal = false;
    var symbol = false;

    function reset(){
         exp = [];
        decimal = false;
         symbol = false;
    }
    $("button").click(function(){
        //console.log("Button clicked: " + $(this).attr("value"));
        var button = $(this).attr("value");
        if(isEqualto(button)) {
            if (exp.length === 0) {
                $('#answer').html(0);
                reset();
            } else {
                var ans = eval(exp.join(''));
                $('#answer').empty();
                $('#answer').html(ans);
                console.log("Answer: " + ans);
                reset();
            }
        }else if(button ==="ac"){
            $('#answer').html(0);
            reset();
        }else if(button === "ce"){

            var popped = exp.pop();
            if(isDecimal(popped)){
                decimal =false;
            }
            $('#answer').html(exp.join(''));

        }




        else {
            if (isSymbol(button)) {
                //console.log("Symbol pressed");
                symbol = true;
                decimal = false;

            }

            if (isDecimal(button)) {

                if (decimal) {
                    alert("Only one decimal in a number");
                }
                else {
                    if (exp[exp.length - 1] && !isSymbol(exp[exp.length - 1])) {
                        exp.push('.');
                    } else {
                        exp.push('0.');
                    }
                    decimal = true;
                }
            }

            else if (exp.length === 0 && isSymbol(button)) {
                alert("No symbol in the beginning");
            } else if (isSymbol(exp[exp.length - 1]) && isSymbol(button)) {
                alert("No symbols in a row");
            }


            else {
                if (isSymbol(button) && isDecimal(exp[exp.length - 1])) {
                    exp.push("00");
                }

                exp.push(button);
                symbol = false;
            }
            //console.log("expression: " + exp.join(''));
            $('#answer').html(exp.join(''));
            //console.log("Decimal: " + decimal);
        }
    });
});
console.log("Hello");

    function isSymbol (x){


        return x === "+" ||  x === "-" || x === "*" || x === "/";


    }
function isDecimal (x){
    return x===".";
}
function isEqualto (x){
    return x==="=";
}