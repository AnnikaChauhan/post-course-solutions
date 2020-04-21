// How do you print duplicate characters from a string?

class DuplicateCharacters {
    constructor(string){
        this.string = string;
        this.duplicateCharacters = [];
    }

    findTheDuplicates = () => {
        const stringToArray = this.string.split('').sort();
        for(let i = 0; i < (stringToArray.length - 1); i++){
            if(stringToArray[i] === stringToArray[i+1]){
                this.duplicateCharacters.push(stringToArray[i])
            }
        }
        return this.duplicateCharacters;
    }
}

const firstTestString = new DuplicateCharacters('hello');
console.log(firstTestString.findTheDuplicates());

const secondTestString = new DuplicateCharacters('lol');
console.log(secondTestString.findTheDuplicates());