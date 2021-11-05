/*
 * @Author: your name
 * @Date: 2021-09-10 21:57:14
 * @LastEditTime: 2021-09-14 23:27:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /gantt/src/component/gantt/GanttTask.ts
 */
interface GanttTask {
    id: number;
    text: string;
    start_date: string;
    parent?: number;
    duration: number;
    progress: number;
}

export default GanttTask;
