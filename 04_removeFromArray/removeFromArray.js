const removeFromArray = function(array,...elementToDelete) {
    //create array to store updated array
    const updatedArray = [];
    //for each item in the array, if the element to delete is not the item
    //added to the updated Array
    array.forEach((item)=>{
        if(!elementToDelete.includes(item)){
            updatedArray.push(item);
        }
    });
    return updatedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
