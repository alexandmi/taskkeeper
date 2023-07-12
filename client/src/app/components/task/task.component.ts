import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DeleteButtonComponent
  ],
  viewProviders: [MatExpansionPanel]
})
export class TaskComponent {

  @Input() currentTask: Task = {
    folder: undefined,
    title: '',
    description: ''
  };

  tempTitle: String = '';
  tempDescription: String = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tempTitle = this.currentTask.title;
    this.tempDescription = this.currentTask.description;
  }

  updateTask(): void {
    if(this.tempTitle.trim()=='')
      return;

    this.currentTask.title = this.tempTitle;
    this.currentTask.description = this.tempDescription;

    this.taskService
      .updateTask(this.currentTask.id, this.currentTask)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    
  }

}
