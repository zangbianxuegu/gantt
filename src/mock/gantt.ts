import Mock from 'mockjs'

const Random = Mock.Random

export default [
  {
    url: '/zentao/gantt',
    type: 'post',
    response: () => {
      let data = [];
      // for (let i = 0; i < 20; i++) {
      //   let d = +new Date();
      //   let duration = Random.integer(1, 10)
      //   let date = new Date((d += (1000 * 3600 * 24) * (i + 1)))
      //   let date_end = new Date((d += (1000 * 3600 * 24) * (i + 1 + duration)))
      //   let start_time = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
      //   let end_time = [date_end.getFullYear(), date_end.getMonth() + 1, date_end.getDate()].join("-")
      //   data.push({
      //     id: i + 1,
      //     task_name: Random.sentence(5, 10),
      //     start_time,
      //     end_time,
      //     assigned_to: String(i + 1),
      //     duration,
      //     progress: 0.3,
      //     parent: 0,
      //   })
      // }
      data = [
        {
          id: 1,
          open: true,
          task_name: '111',
          start_time: '2021-10-01',
          end_time: '2021-10-02',
          duration: 2,
          assigned_to: '张三',
          dept: '前端',
        },
        {
          id: 2,
          parent: 1,
          task_name: '222',
          start_time: '2021-10-01',
          end_time: '2021-10-02',
          duration: 2,
          assigned_to: 'lisi',
          dept: '后端',
        },
        {
          id: 3,
          parent: 1,
          task_name: '333',
          start_time: '2021-10-01',
          end_time: '2021-10-02',
          duration: 2,
          assigned_to: 'wangwu',
          dept: '测试',
        },
      ]
      return {
        code: 200,
        data
      }
    }
  }
]