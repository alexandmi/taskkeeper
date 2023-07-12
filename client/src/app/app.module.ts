import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FolderComponent } from './components/folder/folder.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFolderComponent } from './components/add-folder/add-folder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AddFolderComponent,
    DashboardComponent,
    FolderComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskComponent,
    DeleteButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
