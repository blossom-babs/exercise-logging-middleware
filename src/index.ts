// a text editor function
export {};

const { addFunc } = require('./modules/add');

const textEditor = (word: string) => {
  let newWord = word.split(' ');
  let i = 0;
  while (i < newWord.length) {
    if (newWord[i] === 'Blossom') {
      newWord[i] = 'Bloom';
    }
    i++;
  }

  return newWord.join(' ');
};

let returnedVal = textEditor('Hello, my name is Blossom');
console.log(returnedVal);

console.log(addFunc);
console.log(addFunc(6, 7));