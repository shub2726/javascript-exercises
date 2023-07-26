const palindromes = function (str) {
    let arr = Array.from(str)
        .filter(char => char.toUpperCase() !== char.toLowerCase() || char >= 1 && char <= 9 || char === 0)
        .map(char => char.toLowerCase());
    let revArr = arr;

    arr = arr.join('');
    revArr = revArr.reverse().join('');

    return (arr === revArr);
};

// Do not edit below this line
module.exports = palindromes;
