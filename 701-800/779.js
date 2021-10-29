var kthGrammar = function (N, K) {
  if (N === 0) return 0;

  var length = 2 ** (N - 1);

  if (K > length / 2) {
    var val = kthGrammar(N - 1, K - length / 2);
    return val === 0 ? 1 : 0;
  } else {
    return kthGrammar(N - 1, K);
  }
};
