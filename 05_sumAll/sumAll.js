const sumAll = function(min,max) {
    //Create a variable named totalSum of type int
    let totalSum = 0;
    if(isNaN(min) || isNaN(max)){
        return "ERROR";
    }
    if(min<0 || max <0){
        return "ERROR";
    }

    if(!(Number.isInteger(min))|| !(Number.isInteger(max))){
        return "ERROR";
    }
    if(min>max){
        let temp = max;
        max=min;
        min=temp;
    }
    //Create a loop that iterates between min and max
    for(let i = min;i<=max;i++){
        totalSum+=i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
