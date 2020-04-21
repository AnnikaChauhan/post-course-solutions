// How do you find the largest and smallest number in an unsorted integer array?

class LargestAndSmallest {
    constructor(array){
        this.array = array;
    }

    findTheNumbers = () => {
        const sortedArray = this.array.sort((a,b) => a -b);
        const arrayLength = this.array.length;
        return `The largest number in the array is ${sortedArray[arrayLength -1]} and the smallest number in the array is ${sortedArray[0]}.`
    }
}

const firstTestArray = new LargestAndSmallest([5,3,1,2]);
console.log(firstTestArray.findTheNumbers());

const secondTestArray = new LargestAndSmallest([14,12,5000,51]);
console.log(secondTestArray.findTheNumbers());