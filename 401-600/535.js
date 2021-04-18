/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 let map = new Map()
 let i = 0
 var encode = function (longUrl) {
     map.set(i, longUrl);
     return "http://tinyurl.com/" + i++;
 };

 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function (shortUrl) {
     return map.get(parseInt(shortUrl.replace("http://tinyurl.com/", "")))
 };

 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */
