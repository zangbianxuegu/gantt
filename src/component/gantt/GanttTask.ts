
interface GanttTask {
    id: number;
    text: string;
    start_date: string;
    parent?: number;
    duration: number;
    progress: number;
}

export default GanttTask;