//Sum of arrey
function sumarrey(){
    var numbers = [10, 20, 30, 40] 
    var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }
        return sum;
}
console.log(sumarrey())