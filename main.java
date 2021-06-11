let errorNumber = []
      let doubleEmpty = []
      let scoreEmpty = []

      gridData.forEach((grid, index) => {
        if (!grid.score && !grid.opinionContent) {
          doubleEmpty.push(index + 1)
        }
        if (grid.score > 100 || grid.score.length && Number.isNaN(parseFloat(grid.score))) {
          errorNumber.push(index + 1)
        }
        if (!grid.score) {
          scoreEmpty.push(index + 1)
        }
      })

      if(errorNumber.length) {
        return this.$message.warning(`请在第${errorNumber.toString()}行确保填入合适的分数(不能超过100分, 而且需要是数字)`)
      }
      if (doubleEmpty.length) {
        return this.$message.warning(`第${doubleEmpty.toString()}行，评估周期内考核平均得分为空时，备注字段必填`)
      }
