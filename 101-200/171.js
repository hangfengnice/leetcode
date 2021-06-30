var titleToNumber = function (columnTitle) {
  let number = 0;
  let multiple = 1;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const k = columnTitle[i].codePointAt() - "A".codePointAt() + 1;
    number += k * multiple;
    multiple *= 26;
  }
  return number;
};
