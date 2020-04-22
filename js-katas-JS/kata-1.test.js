import FindTheMissingNumbers from "./kata-1";

describe('find the missing numbers works',() => {

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
})