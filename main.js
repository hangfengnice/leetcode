let html = '11<123<'

let textEnd = html.indexOf('<')
console.log(textEnd)

let rest = html.slice(textEnd)
let next = rest.indexOf('<', 1)

console.log(next)
