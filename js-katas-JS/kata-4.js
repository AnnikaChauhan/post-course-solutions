// How do you remove duplicates from an array in place?

class DuplicateValueRemover {
    constructor(array){
        this.array = array;
    }

    removeIt = () => {
        const arrayLength = this.array.length;
        let cleanedSet = new Set();
        for(let i = 0; i < arrayLength; i++){
           cleanedSet.add(this.array[i])
        }
        return cleanedSet;
    }
}

const firstTestArray = new DuplicateValueRemover([1,3,3,5]);
console.log(firstTestArray.removeIt());

const secondTestArray = new DuplicateValueRemover([3,3,5,5]);
console.log(secondTestArray.removeIt());

const thirdTestArray = new DuplicateValueRemover([3,5]);
console.log(thirdTestArray.removeIt());