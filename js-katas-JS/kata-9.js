// How do you check if two strings are anagrams of each other?

class Anagrams {
    constructor(wordOne,wordTwo){
        this.wordOne = wordOne.split('').sort().join('');
        this.wordTwo = wordTwo.split('').sort().join('');
    }

    checkItsAnAnagram = () => {
        if(this.wordOne === this.wordTwo){
            return 'Anagrams!!';
        } else {
            return 'Not Anagrams :(';
        }
    }
}

const firstTestWords = new Anagrams('eggs','alphabet');
console.log(firstTestWords.checkItsAnAnagram());

const secondTestWords = new Anagrams('fired','fried');
console.log(secondTestWords.checkItsAnAnagram());

const thirdTestWords = new Anagrams('laying','gainly');
console.log(thirdTestWords.checkItsAnAnagram());