import DuplicateValueFinder from "./kata-2";

describe('finds the duplicate number in an array', () => {

    it('sorts the array numerically from smallest to largest', () => {
        const inputArray = [1,3,3,5];
        const classInstance = new DuplicateValueFinder(inputArray);
        const outputArray = [1,3,3,5];
        expect(classInstance.array).toMatchObject(outputArray);
    })

    it('should return the duplicate value from the array in the form of an array itself', () => {
        const inputArray = [1,3,3,5];
        const classInstance = new DuplicateValueFinder(inputArray);
        const outputArray = [3];
        expect(classInstance.getTheDuplicates()).toMatchObject(outputArray); 
    })
})