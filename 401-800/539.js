var findMinDifference = function(timePoints) {
  const timeMinutes = timePoints.map(timepoint => {
    const [hour, mimute] = timepoint.split(':')
    return hour * 60 + mimute * 1
  })

  timeMinutes.sort((a, b) => a - b)
  timeMinutes.push(timeMinutes[0] + 24 * 60)

  let dMin = 24 * 60

  for(let i = 1; i < timeMinutes.length; i ++) {
    const d = timeMinutes[i] - timeMinutes[i - 1]
    dMin = Math.min(d, dMin)
  }
  return dMin
};
