import { Component, Input } from '@angular/core';

import { Task } from 'src/app/models/task/task.model';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [TaskComponent, CommonModule,MatExpansionModule,MatButtonModule],
  viewProviders: [MatExpansionPanel]
})
export class TaskListComponent {

  currentTask: Task = {title: "", description:""};
  title = '';

  @Input() tasks: Task[] = new Array();
  
}
