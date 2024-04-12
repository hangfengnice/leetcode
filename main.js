var pathsWithMaxScore = function (board) {
  let row = board.length

  if (row === 0) return [0, 0]

  let mod = 1e9 + 7

  let col = board[0].length

  let dpscore = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0))
  let dppath = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0))

  dppath[row - 1][col - 1] = 1

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      let ch = board[i][j]

      if (
        ch !== 'X' &&
        (dppath[i + 1][j] || dppath[i][j + 1] || dppath[i + 1][j + 1])
      ) {
        let maxscore = Math.max(
          dpscore[i + 1][j],
          dpscore[i][j + 1],
          dpscore[i + 1][j + 1]
        )
        if (ch !== 'E') {
          dpscore[i][j] = maxscore + (ch - 0)
        } else {
          dpscore[i][j] = maxscore
        }

        if (maxscore === dpscore[i + 1][j]) {
          dppath[i][j] = (dppath[i][j] + dppath[i + 1][j]) % mod
        }
        if (maxscore === dpscore[i][j + 1]) {
          dppath[i][j] = (dppath[i][j] + dppath[i][j + 1]) % mod
        }
        if (maxscore === dpscore[i + 1][j + 1]) {
          dppath[i][j] = (dppath[i][j] + dppath[i + 1][j + 1]) % mod
        }
      }
    }
  }


  return [maxscore, dppath[0][0]]
}

pathsWithMaxScore(['E23', '2X2', '12S'])
