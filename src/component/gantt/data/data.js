/*
 * @Date: 2021-09-10 21:57:14
 * @LastEditors: zangbianxuegu
 * @LastEditTime: 2021-09-10 23:30:38
 * @FilePath: /so-react-gantt-demo/parent-child/src/component/gantt/data/data.js
 */
const data = {
    data: [
        {
            id: 1,
            text: '任务1任务1任务1任务1',
            start_date: '2019-08-20 10:30',
            duration: 8,
            progress: 0.6,
            priority: 'high'
        },
        {
            id: 2,
            parent: 1,
            open: true,
            text: '任务22222',
            start_date: '2019-08-21 10:30',
            duration: 3,
            progress: 0.4,
            priority: 'normal'
        },
        {
            id: 3,
            text: 'Task #3',
            start_date: '2019-08-23 10:30',
            duration: 3,
            progress: 0.4,
            priority: 'low'
        },
        {
            id: 4,
            text: 'Task #4',
            start_date: '2019-08-24 10:30',
            duration: 3,
            progress: 0.4,
            priority: 'low'
        },
        {
            id: 5,
            text: 'Task #5',
            start_date: '2019-08-24 10:30',
            duration: 3,
            progress: 0.4,
            priority: 'low'
        },
        {
            id: 6,
            text: 'Task #6',
            start_date: '2019-08-25 10:30',
            duration: 3,
            progress: 0.4,
            priority: 'low'
        }
    ],
};

export default data;