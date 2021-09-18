import Mock from 'mockjs'

const Random = Mock.Random

export default [
  {
    url: '/data',
    type: 'get',
    response: () => {
      let data = [];
      for (let i = 0; i < 20; i++) {
        let d = +new Date();
        let date = new Date((d += (1000 * 3600 * 24) * (i + 1)))
        let start_date = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
        data.push({
          id: i + 1,
          start_date,
          text: Random.sentence(5, 10),
          duration: Random.integer(1, 10),
          progress: 0.3,
        })
      }
      
      // data = [
      //   {
      //     duration: 9,
      //     id: 5,
      //     progress: 0.3,
      //     start_date: "2021-9-15",
      //     text: "Fatetbuysb dqdlcjpsnl nwyj zypjbiwib hvjwbtlbj tnb scvkqwqjy."
      //   },
      //   {
      //     id: 1,
      //     text: '前端任务1',
      //     duration: 5,
      //     progress: 0.5,
      //     start_date: '2021-09-15',
      //   },
      //   {
      //     id: 2,
      //     text: '前端任务2',
      //     duration: 5,
      //     progress: 0.1,
      //     start_date: '2021-09-15',
      //   },
      //   {
      //     id: 3,
      //     text: '前端任务3',
      //     duration: 5,
      //     progress: 0.3,
      //     start_date: '2021-09-15',
      //   }
      // ]
      return {
        code: 200,
        data
      }
    }
  }
]