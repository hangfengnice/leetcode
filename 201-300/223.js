var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const area1 = (ax2 - ax1) * (ay2 - ay1),
    area2 = (bx2 - bx1) * (by2 - by1);
  const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1),
    overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
    console.log(overlapWidth, overlapHeight);
  const overlapArea = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0);
  return area1 + area2 - overlapArea;
};

computeArea(-2 - 2, 2, 2, 3, 3, 4, 4);
