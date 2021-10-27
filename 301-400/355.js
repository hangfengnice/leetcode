var Twitter = function() {
  this.article = []
  this.user = new Map()
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.article.unshift([userId, tweetId])
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  let arr = this.user.get(userId) || []
  arr.push(userId)
  let res = []
  this.article.forEach(([id, tid]) => {
    if (arr.includes(id)) {
      res.push(tid)
    }
  })
  if(res.length > 10) {
    res = res.slice(0, 10)
  }
  return res
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.user.get(followerId)) {
    return this.user.get(followerId).push(followeeId)
  }
  this.user.set(followerId, [followeeId])
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.user.get(followerId)) {
    let arr = this.user.get(followerId)
    let index = arr.indexOf(followeeId)
    arr.splice(index, 1)
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
