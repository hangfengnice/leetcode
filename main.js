new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 500)
}).then(() => {
  console.log('res');
}).finally(() => {
  console.log('latter');
})
