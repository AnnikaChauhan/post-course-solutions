// How do you reverse the words in a sentence?

class ReverseTheSentence {
    constructor(sentence){
        this.sentence = sentence;
    }

    reverseIt = () => {
        const sentenceToArray = this.sentence.split(' ');
        const arrayLength = sentenceToArray.length;
        const reverseArray = [];
        for(let i = (arrayLength - 1); i > -1; i--){
            reverseArray.push(sentenceToArray[i]);
        }
        const newSentence = reverseArray.join(' ');
        return newSentence;
    }
}

const firstTestSentence = new ReverseTheSentence('the cat in the hat');
console.log(firstTestSentence.reverseIt());

const secondTestSentence = new ReverseTheSentence('lorem ipsum dolor sit amet consectetur adipiscing elit');
console.log(secondTestSentence.reverseIt());