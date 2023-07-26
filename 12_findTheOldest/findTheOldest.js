const findTheOldest = function(arr) {
    return longest = arr.reduce((max, person) => {
        let birth = person.yearOfBirth;
        let death = person.yearOfDeath? person.yearOfDeath : new Date().getFullYear();
        
        if (death - birth > max.age) {
            max.age = death - birth;
            max.name = person.name;
        }

        return max;
    }, {
        age: 0,
        name: ""
    });
};

// Do not edit below this line
module.exports = findTheOldest;
