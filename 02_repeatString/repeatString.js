const repeatString = function(string,num) {
    let multipliedString = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i=0;i<num;i++){
        multipliedString +=string;
    }
    return multipliedString;
};

// Do not edit below this line
module.exports = repeatString;
