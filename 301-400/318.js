var maxProduct = function (words) {
  const length = words.length;
  const masks = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    const word = words[i];
    const wordLength = word.length;
    for (let j = 0; j < wordLength; j++) {
      masks[i] |= 1 << (word[j].codePointAt() - 97);
    }
  }

  console.log(masks, 'masks')
  let maxProd = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        maxProd = Math.max(maxProd, words[i].length * words[j].length);
      }
    }
  }
  return maxProd;
};

let res = maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"])
console.log(res, 'res')
