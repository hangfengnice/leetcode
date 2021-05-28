var GetImportance = function (employees, id) {
  console.log(employees);
  const map = new Map();
  for (const employee of employees) {
    map.set(employee.id, employee);
  }

  return dfs(id);

  function dfs(id) {
    const employee = map.get(id);
    let total = employee.importance;
    const subordinates = employee.subordinates;
    for (const subId of subordinates) {
      total += dfs(subId);
    }
    return total;
  }
};
