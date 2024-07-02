var findChampion = function (grid) {
  const n = grid.length

  for (let i = 0; i < n; i++) {
    const sum = grid[i].reduce((acc, val) => acc + val, 0)

    if (sum === n - 1) {
      return i
    }
  }
  return -1
}
