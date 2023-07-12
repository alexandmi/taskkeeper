import { Task } from 'src/app/models/task/task.model';

export class TaskList {

    constructor(tasks: Task[]) { this.tasks = tasks}

    tasks?: Task[];
}
