const reverseString = function(word) {
    let reservedString = "";
    for(let i=word.length-1;i>=0;i--){
        reservedString +=word[i];
    }
    return reservedString;
};

// Do not edit below this line
module.exports = reverseString;
