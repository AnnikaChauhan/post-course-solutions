// How do you check if a given string is a palindrome?

class Palindrome {
    constructor(word){
        this.word = word;
    }

    checkIt = () => {
        const array = this.word.split('');
        const reversedArray = [];
        for(let i = (array.length - 1); i > -1; i--){
            reversedArray.push(array[i])
        }
        const reversedPhrase = reversedArray.join('');
        if(this.word === reversedPhrase){
            return 'Palindrome!!';
        } else {
            return 'Not a Palindrome :(';
        }
    }
}

const firstTestPhrases = new Palindrome('mom');
console.log(firstTestPhrases.checkIt());

const secondTestPhrases = new Palindrome('moma');
console.log(secondTestPhrases.checkIt());

const thirdTestPhrases = new Palindrome('radar');
console.log(thirdTestPhrases.checkIt());