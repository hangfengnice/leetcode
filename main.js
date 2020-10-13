


let p = Promise.all([Promise.resolve(), new Promise((resolve, reject) => setTimeout(resolve, 1000))])

setTimeout(console.log, 0, p)
