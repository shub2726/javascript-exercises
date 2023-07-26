const fibonacci = function(idx) {
    if (idx < 0) return "OOPS";
    let a = 0, b = 1;
    for (let i = 0; i < idx; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
