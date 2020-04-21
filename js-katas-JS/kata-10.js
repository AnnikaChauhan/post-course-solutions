// How do you print the first non-repeated character from a string?

//this doesn't work
class NotDuplicateCharacters {
    constructor(string){
        this.string = string;
    }

    //this might be better as a loop in a loop - one around the first number and one around the second
    findTheNotDuplicate = () => {
        const stringToArray = this.string.split('').sort();
        for(let i = 0; i < (stringToArray.length - 1); i++){
            if(stringToArray[i] !== stringToArray[i+1]){
                console.log(stringToArray[i]);
            }
        }
    }
}

const firstTestString = new NotDuplicateCharacters('hello');
console.log(firstTestString.findTheNotDuplicate());

const secondTestString = new NotDuplicateCharacters('lol');
// console.log(secondTestString.findTheNotDuplicate());