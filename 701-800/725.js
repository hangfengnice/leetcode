var splitListToParts = function (head, k) {
  let n = 0;
  let temp = head;
  while (temp) {
    n++;
    temp = temp.next;
  }

  let quotient = Math.floor(n / k),
    remainder = n % k;
  let parts = new Array(k).fill(null);

  let curr = head;
  for (let i = 0; i < k && curr; i++) {
    parts.push(curr);
    let partSize = quotient + (i < remainder ? 1 : 0);
    for (let i = 1; i < partSize; i++) {
      curr = curr.next;
    }

    let next = curr.next;
    curr.next = null;
    curr = next;
  }
  return parts;
};
