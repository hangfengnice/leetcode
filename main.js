// number bigint string boolean null undefined



try {
  Promise.reject(new Error('bar'))
} catch (e) {
  console.log(e, 'zheli de e');
}
