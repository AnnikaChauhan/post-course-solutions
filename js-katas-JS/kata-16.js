// How do you check if a string contains only digits?

class CheckIfAStringContainsOnlyNumbers {
    constructor(string){
        this.string = string.split('');
        this.checker = [];
    }

    checkIt = () => {
        for(let i = 0; i < this.string.length; i++){
            if(Number(this.string[i])){
                this.checker.push(true);
            } else {
                this.checker.push(false);
            }
        }
        if(this.checker.includes(false)){
            return 'This string contains characters that are not digits';
        } else {
            return 'This string contains only digits';
        }
    }
}

const firstTestString = new CheckIfAStringContainsOnlyNumbers('hello123');
console.log(firstTestString.checkIt());

const secondTestString = new CheckIfAStringContainsOnlyNumbers('123456');
console.log(secondTestString.checkIt());