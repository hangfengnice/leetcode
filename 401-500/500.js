var findWords = function (words) {
  let list = [];
  const rowIdx = "12210111011122000010020202";

  for (let word of words) {
    let isValid = true;
    const idx = rowIdx[word[0].toLowerCase().codePointAt() - 97];
    for (let i = 1; i < word.length; i++) {
      if (rowIdx[word[i].toLowerCase().codePointAt() - 97] !== idx) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      list.push(word);
    }
  }
  return list;
};
