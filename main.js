var subsets = function (nums) {
    let res = [];
    dfs([], 0);
    return res;
    function dfs(temp, start) {
        res.push(temp.slice());
        for (let i = start; i < nums.length; i++) {
            temp.push(nums[i]);
            dfs(temp, i + 1);
            temp.pop();
        }
    }
};
