export function calculateMetrics(rows) {
  const miles = rows.map(r => r.miles);
  return {
    average: (miles.reduce((a, b) => a + b, 0) / miles.length).toFixed(2),
    min: Math.min(...miles),
    max: Math.max(...miles)
  };
}

export function groupByPerson(rows) {
  return rows.reduce((acc, r) => {
    acc[r.person] = acc[r.person] || [];
    acc[r.person].push(r);
    return acc;
  }, {});
}
