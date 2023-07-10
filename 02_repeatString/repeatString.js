const repeatString = function(str, times) {
    if (times < 0) return 'ERROR';
    let soln = "";
    for (let i = 0; i < times; i++) soln += str;
    return soln;
};

// Do not edit below this line
module.exports = repeatString;
