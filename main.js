var convert = function (s, numRows) {
  if (numRows == 1) return s

  let len = Math.min(s.length, numRows)

  const rows = new Array(len).fill('')

  let loc = 0
  let down = false

  for(let c of s) {
    rows[loc] += c
    if (loc == 0 || loc == numRows - 1) {
      down = !down
    }
    loc += down ? 1 : -1
  }

  for(let row of rows) {

  }

}
