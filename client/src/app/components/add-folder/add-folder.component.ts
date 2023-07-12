import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Folder } from 'src/app/models/folder/folder.model';
import { Task } from 'src/app/models/task/task.model';
import { FolderService } from 'src/app/services/folder.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatExpansionModule
  ]
})
export class AddFolderComponent {

  tempTask: Task[] = new Array();

  folder: Folder = {
    id: '',
    name: '',
    tasks: this.tempTask
  };

  constructor(
    private folderService: FolderService
    ) {}

  saveFolder(): void {
    if(this.folder.name.trim()=="")
      return;
    
    const data = {
      name: this.folder.name,
      tasks: this.folder.tasks
    };

    this.folderService.createFolder(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
    location.reload();
  }

}
