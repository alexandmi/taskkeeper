import { Folder } from "../folder/folder.model";

export class Task {
    id?: any;
    folder?: Folder;
    title: String="";
    description: String="";
}