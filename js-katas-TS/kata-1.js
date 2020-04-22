// How do you find the missing numbers in a given integer array?
//Annika's Notes:
//sort the array [x,y,z]
//options:
//loop through the array backwards
//if z minus y is greater than 1 then push the value of z-1 into the array
//IF (z-1)-1 is equal to y, then next loop
//ELSE recursively loop back through
//initially do z - x
//if a COUNT of all of the total numbers matches the difference (or something similar) CHILL
//if not do the above loop
var FindTheMissingNumbers = /** @class */ (function () {
    function FindTheMissingNumbers(array) {
        var _this = this;
        this.pushMissingNumberIntoArray = function (number) {
            for (var i = (number - 1); i > 0; i--) {
                var topEndValue = _this.array[i];
                var bottomEndValue = _this.array[i - 1];
                if (topEndValue - bottomEndValue !== 1) {
                    for (var i_1 = topEndValue; i_1 > (bottomEndValue + 1); i_1--) {
                        _this.missingNumbers.push(i_1 - 1);
                    }
                }
            }
        };
        this.missingNumberCalculation = function () {
            var numberOfItems = _this.array.length;
            var differenceBetweenFirstAndLastNumberInArray = _this.array[numberOfItems - 1] - _this.array[0];
            var itemsThatShouldBeInArray = differenceBetweenFirstAndLastNumberInArray + 1;
            if (numberOfItems === itemsThatShouldBeInArray) {
                return [];
            }
            else {
                _this.pushMissingNumberIntoArray(numberOfItems);
                return _this.missingNumbers.sort(function (a, b) { return a - b; });
            }
        };
        this.array = array.sort(function (a, b) { return a - b; });
        this.missingNumbers = [];
    }
    return FindTheMissingNumbers;
}());
//no numbers missing
var firstTestArray = new FindTheMissingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//console.log(firstTestArray.array);
console.log(firstTestArray.missingNumberCalculation());
//some numbers missing and wrong order
var secondTestArray = new FindTheMissingNumbers([2, 3, 9, 8]);
// console.log(secondTestArray.array);
console.log(secondTestArray.missingNumberCalculation());
//lots of numbers missing right order
var thirdTestArray = new FindTheMissingNumbers([2, 4, 6, 8, 10, 12, 14, 16, 20]);
console.log(thirdTestArray.missingNumberCalculation());
// lots of numbers missing, NOT starting from lowest number
var fourthTestArray = new FindTheMissingNumbers([11, 5, 7, 13]);
console.log(fourthTestArray.missingNumberCalculation());
