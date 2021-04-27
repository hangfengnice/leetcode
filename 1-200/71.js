var simplifyPath = function(path) {
  let paths = path.split('/')
  let stack = []
  for(let path of paths) {
    if (path == '' || path == '.') continue
    if (path == '..') {
      stack.length ? stack.pop() : null
      continue
    }
    stack.push(path)
  }
  return '/' + stack.join('/')
};
