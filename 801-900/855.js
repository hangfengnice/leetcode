/**
 * @param {number} n
 */
var ExamRoom = function (n) {
  this.N = n;
  this.students = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
  let student = 0;
  if (this.students.length > 0) {
    let dist = this.students[0];
    let prev = null;
    for (let s of this.students) {
      if (prev !== null) {
        let d = Math.floor((s - prev) / 2);
        if (d > dist) {
          dist = d;
          student = prev + d;
        }
      }
      prev = s;
    }
    let tempArr = this.students;

    if (this.N - 1 - tempArr[tempArr.length - 1] > dist) {
      student = this.N - 1;
    }
  }
  if (!this.students.includes(student)) this.students.push(student);
  this.students.sort((a, b) => a - b);
  return student;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  this.students = this.students.filter((v) => v !== p);
  this.students.sort((a, b) => a - b);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */


let instance = new ExamRoom(10)
console.log(instance.seat());
console.log(instance.seat());
console.log(instance.seat());
console.log(instance.seat());

