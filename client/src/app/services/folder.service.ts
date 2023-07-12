import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {  

  private baseUrl = 'http://localhost:8080/api/folders';

  constructor(private http: HttpClient) {}
  
  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.baseUrl);
  }

  getFolderById(id: any): Observable<Folder> {
    return this.http.get<Folder>(`${this.baseUrl}/${id}`);
  }

  createFolder(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateFolder(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteFolder(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
