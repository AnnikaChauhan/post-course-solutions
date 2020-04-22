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

export default class FindTheMissingNumbers {
    constructor(array){
        this.array = array.sort((a, b) => a - b);
        this.missingNumbers = [];
    }

    pushMissingNumberIntoArray = (number) => {
        for(let i = (number - 1); i > 0; i--){
            let topEndValue = this.array[i];
            let bottomEndValue = this.array[i-1];
            if(topEndValue - bottomEndValue !== 1){
                for(let i = topEndValue; i > (bottomEndValue + 1); i--){
                    this.missingNumbers.push(i - 1);
                }
            }
        }
    }

    missingNumberCalculation = () => {
        const numberOfItems = this.array.length;
        const differenceBetweenFirstAndLastNumberInArray = this.array[numberOfItems - 1] - this.array[0];
        const itemsThatShouldBeInArray = differenceBetweenFirstAndLastNumberInArray + 1;
        if(numberOfItems === itemsThatShouldBeInArray){
             return 'no missing numbers here';
        } else {
            this.pushMissingNumberIntoArray(numberOfItems);
            return this.missingNumbers.sort((a, b) => a - b);
        }
    }

}

/*
const firstTestArray = new FindTheMissingNumbers([1,2,3,4,5,6,7,8,9]);
console.log(firstTestArray.missingNumberCalculation());

const secondTestArray = new FindTheMissingNumbers([2,3,9,8]);
console.log(secondTestArray.missingNumberCalculation());

const thirdTestArray = new FindTheMissingNumbers([2,4,6,8,10,12,14,16,20]);
console.log(thirdTestArray.missingNumberCalculation());

const fourthTestArray = new FindTheMissingNumbers([11,5,7,13]);
console.log(fourthTestArray.missingNumberCalculation());
*/