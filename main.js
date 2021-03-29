let M1 = 0b01

let n = 0b10

console.log(n >>> 1 & M1);
console.log((n & M1) << 1);
n = n >>> 1 & M1 | (n & M1) << 1


console.log(n)
