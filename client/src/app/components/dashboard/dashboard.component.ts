import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Folder } from 'src/app/models/folder/folder.model';
import { FolderService } from 'src/app/services/folder.service';
import { AddFolderComponent } from '../add-folder/add-folder.component';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-folder-list',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule,MatButtonModule,AddFolderComponent,RouterModule]
})
export class DashboardComponent {

  folders?: Folder[];
  
  constructor( private folderService: FolderService) {}

  ngOnInit(): void {
    this.retrieveFolders();
  }

  retrieveFolders(): void {
    this.folderService.getAllFolders().subscribe({
      next: (data) => {
        console.log(data);
        this.folders = data;
      },
      error: (e) => console.error(e)
    });
  }

}
