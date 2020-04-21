// How do you find all pairs of an integer array whose sum is equal to a given number?

class FindTheSum {
    constructor(array,value){
        this.array = array;
        this.value = value;
    }

    calculate = () => {
        let sumPairs = [];
        for(let i = 0; i < this.array.length; i++){
            if(this.array.includes(this.value - this.array[i])){
                sumPairs.push([this.array[i],(this.value - this.array[i])]);
            }
        }
        return sumPairs;
    }
}

const firstTest = new FindTheSum([1,2,3,4],5);
console.log(firstTest.calculate());