// How do you find the duplicate number on a given integer array?

//Annika's Notes:
    //sort the array
    //loop through the array and if the value of index minus index - 1 is 0 then push it into an array of dups

export default class DuplicateValueFinder {
    constructor(array){
        this.array = array.sort((a,b) => a - b);
        this.duplicateNumbers = [];
    }

    getTheDuplicates = () => {
        const arrayLength = this.array.length;
        for(let i = (arrayLength - 1); i > 0; i--){
            if(this.array[i] - this.array[i - 1] === 0){
                this.duplicateNumbers.push(this.array[i])
            }
        }
        return this.duplicateNumbers;
    }
}

/*
const firstTestArray = new DuplicateValueFinder([1,3,3,5]);
console.log(firstTestArray.getTheDuplicates());

const secondTestArray = new DuplicateValueFinder([3,3,5,5]);
console.log(secondTestArray.getTheDuplicates());

const thirdTestArray = new DuplicateValueFinder([3,5]);
console.log(thirdTestArray.getTheDuplicates());
*/