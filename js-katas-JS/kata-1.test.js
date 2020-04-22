import FindTheMissingNumbers from "./kata-1";

describe('finds the missing numbers',() => {

    it('should collect the array in the constructor and sort it numerically from smallest to largest', () => {
        const inputArray = [2,3,9,8];
        const classInstance = new FindTheMissingNumbers(inputArray);
        const outputArray = [2,3,8,9];
        expect(classInstance.array).toMatchObject(outputArray);
    })

    it('returns an array of numbers that were missing from the series', () => {
        const inputArray = [2,3,9,8];
        const classInstance = new FindTheMissingNumbers(inputArray);
        const outputArray = [4,5,6,7];
        expect(classInstance.missingNumberCalculation()).toMatchObject(outputArray);
    })

    it('should collect the array in the constructor and sort it numerically from smallest to largest', () => {
        const inputArray = [11,5,7,13];
        const classInstance = new FindTheMissingNumbers(inputArray);
        const outputArray = [5,7,11,13];
        expect(classInstance.array).toMatchObject(outputArray);
    })

    it('returns an array of numbers that were missing from the series', () => {
        const inputArray = [11,5,7,13];
        const classInstance = new FindTheMissingNumbers(inputArray);
        const outputArray = [6,8,9,10,12];
        expect(classInstance.missingNumberCalculation()).toMatchObject(outputArray);
    })
})