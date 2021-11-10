var findMinStep = function (board, hand) {
  const visited = new Set()
  let r = Infinity
  dfs(board, hand, 0)
  return r === Infinity ? -1 : r

  function dfs(board, hand, count) {
    if (board.length === 0) return r = Math.min(r, count)

    if (hand.length === 0 || visited.has(board + count)) return

    visited.add(board + count)

    for(let i = 0; i < board.length; i ++) {
      for(let j = 0; j < hand.length; j ++) {
        dfs(combine(board.slice(0, i) + hand[j] + board.slice(i)), hand.slice(0, j) + hand.slice(j + 1), count + 1)
      }
    }
  }

  function combine (board) {
    for(let slow = fast = 0; fast <= board.length; fast ++) {
      if (board[slow] === board[fast]) continue
      if (fast - slow > 2) {
        board = board.substring(0, slow) + board.substring(fast)
        fast = 0
      }
      slow = fast
    }
    return boardƒ
  }
}
