import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Folder } from 'src/app/models/folder/folder.model';
import { Task } from 'src/app/models/task/task.model';
import { FolderService } from 'src/app/services/folder.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { A11yModule } from '@angular/cdk/a11y';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    AddTaskComponent,
    TaskListComponent,
    FormsModule,
    MatInputModule,
    A11yModule,
    DeleteButtonComponent,
    MatCardModule
  ],
  viewProviders: [MatExpansionPanel]
})
export class FolderComponent {
 
  taskList: Task[] = new Array();
  
  folder: Folder = {
    id: undefined,
    name: '',
    tasks: this.taskList
  };

  hasFocused: boolean = false;

  constructor(
    private folderService: FolderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFolder(this.route.snapshot.params['id']);
  }

  loadFolder(id: any): void {
    this.folderService.getFolderById(id).subscribe({
      next: (data) => {
        this.folder = new Folder(data);
        console.log(this.folder);
        this.createTaskListArray(this.folder.tasks);
      },
      error: (e) => {console.log("I like elephants");console.error(e)}
    });
  }

  createTaskListArray(setTasks: Task[] | undefined): void{
      if(setTasks == undefined){
        this.taskList = [];
      }
      else{
        this.taskList = Array.from(setTasks.values());
      }
  }

  updateName(): void{  
    this.folderService
        .updateFolder(this.folder.id, this.folder)
        .subscribe({
          next: (res) => {
          },
          error: (e) => console.error(e)
        });
  }

  checkForNameUpdate(){
    this.hasFocused = !this.hasFocused;
    if(!this.hasFocused)
      this.updateName();
  }

}
