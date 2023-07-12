import { Task } from "../task/task.model";

export class Folder {

    constructor(data: any) { 
        this.id = data.id;
        this.name = data.name;
        this.tasks = data.tasks;
    }

    id?: any;
    name: String;
    tasks: Task[];
}
