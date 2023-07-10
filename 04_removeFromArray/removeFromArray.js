const removeFromArray = function(arr, ...rmArr) {
    return arr.filter(word => !rmArr.includes(word))
};

// Do not edit below this line
module.exports = removeFromArray;
