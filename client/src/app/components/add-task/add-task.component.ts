import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Folder } from 'src/app/models/folder/folder.model';
import { Task } from 'src/app/models/task/task.model';
import { TaskService } from 'src/app/services/task.service';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class AddTaskComponent {
  
  @Input() folder?: Folder;

  task: Task = {
    title: "",
    description: "",
    folder: undefined
  };

  constructor(
    private taskService: TaskService,
    ) {}

  saveTask(): void {
    if(this.task.title.trim()=="")
      return;
    
    const data = {
      title: this.task.title,
      description: this.task.description,
      folder: this.folder
    };

    this.taskService.createTask(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
    location.reload();
  }

}
