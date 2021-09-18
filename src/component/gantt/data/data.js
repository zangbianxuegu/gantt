const mockData = (prefix, maxSize, maxYears) => {
  maxYears = maxYears || 100;
  maxSize = maxSize || 50;
  prefix = prefix || "";
  const tasks = [];
  for (let i = 1; i <= maxSize; i++) {
    const ii = i % (365 * maxYears);

    let start = 2 + ii - (ii >= 13 ? 12 : 0);
    let end = start + 1 + Math.round(Math.random() * 2);
    tasks.push({
      id: i,
      start_date: new Date(2020, 2, start),
      end_date: new Date(2020, 2, end),
      text: prefix + "Task " + i,
      progress: Math.round((100 * i) / maxSize),
      parent: 0,
      type: "task",
    });
  }
  tasks[1].text = '调整目前H5中商品拉取存在的诸多问题（UI）'
  tasks[2].text = '小程序首页开发'
  tasks[3].text = '红包中心和红包管理后台增加展示字段（前端）'
  tasks[4].text = '（后端）现货选品规则销售维度需求'
  tasks[5].text = '（测试）档口推荐落地H5页面'
  return tasks;
}
const data = {
  data: mockData()
};

export default data;