import {Component, Inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

import { Task } from 'src/app/models/task/task.model';
import { Folder } from 'src/app/models/folder/folder.model';
import { FolderService } from 'src/app/services/folder.service';
import { TaskService } from 'src/app/services/task.service';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface DialogData {
  deletionType: string;
  name: string;
}

@Component({
  selector: 'app-delete-button',
  templateUrl: 'delete-button.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
  ],
})
export class DeleteButtonComponent {
  
  @Input() name?: String;
  @Input() task?: Task;
  @Input() folder?: Folder;
  deletionType?: String;

  constructor(
    public dialog: MatDialog,
    private folderService: FolderService,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(){
    if(this.task == undefined)
      this.deletionType = "folder";
    else
      this.deletionType = "task";
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DeleteWindow, {
      data: {deletionType: this.deletionType, name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(this.task == undefined){
          this.folderService.deleteFolder(this.folder?.id).subscribe({
            next: (res) => {
              console.log(res);
              this.router.navigate(["/"]);
            },
            error: (e) => console.error(e)
          });
        }
        else{
          this.taskService.deleteTask(this.task?.id).subscribe({
            next: (res) => {
              console.log(res);
              location.reload();
            },
            error: (e) => console.error(e)
          });
        }
      }
    });
  }
}

@Component({
  selector: 'delete-window',
  templateUrl: 'delete-window.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DeleteWindow {
  constructor(
    public dialogRef: MatDialogRef<DeleteWindow>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}