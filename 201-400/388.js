var lengthLongestPath = function (input) {
  let stack = [0];
  let result = 0;
  let string = input.split("\n");

  console.log(input, 'input');
  console.log(string[1].length);
  for (let i = 0; i < string.length; i++) {
    let level = string[i].lastIndexOf("\t") + 1;
    console.log(level);
    while (level + 1 < stack.length) {
      stack.pop();
    }

    let length = stack[stack.length - 1] + (string[i].length - level + 1);

    stack.push(length);

    if (string[i].includes(".")) {
      result = Math.max(result, length - 1);
    }
  }
  return result;
};


let res = lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')

console.log(res);
