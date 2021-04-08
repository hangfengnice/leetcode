var getHint = function (secret, guess) {
  let A = 0;
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] == guess[i]) {
      A++;
    }
  }

  let mapS = new Map();
  let mapG = new Map();

  for (let i = 0; i < secret.length; i++) {
    let curs = secret[i];
    let curg = guess[i];
    mapS.set(curs, (mapS.get(curs) || 0) + 1);
    mapG.set(curg, (mapG.get(curg) || 0) + 1);
  }
  let B = 0;
  console.log(mapS, mapG);
  for (let key of mapS.keys()) {
    let n1 = mapS.get(key) || 0;
    let n2 = mapG.get(key) || 0;
    B += Math.min(n1, n2);
  }

  return `${A}A${B - A}B`;
};

var getHint = function (secret, guess) {
  let A = 0;
  let mapS = new Array(10).fill(0);
  let mapG = new Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] == guess[i]) {
      A++;
    } else {
      mapS[secret[i] - 0]++;
      mapG[guess[i] - 0]++;
    }
  }
  console.log(mapS, mapG);
  let B = 0;
  for (let i = 0; i < 10; i++) {
    B += Math.min(mapG[i], mapS[i]);
  }

  return `${A}A${B}B`;
};

// 解法二
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;
  let numbers = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    let s = secret[i] - 0;
    let g = guess[i] - 0;
    if (s == g) bulls++;
    else {
      if (numbers[s] < 0) cows++;
      if (numbers[g] > 0) cows++;

      numbers[s]++;
      numbers[g]--;
    }
  }
  return `${bulls}A${cows}B`;
};

let res = getHint((secret = "1123"), (guess = "0111"));
console.log(res, "res");
