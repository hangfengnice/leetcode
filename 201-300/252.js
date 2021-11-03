var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    let curStart = intervals[i][0];
    if (curStart < end) {
      return false;
    }
    end = intervals[i][1];
  }
  return true;
};
