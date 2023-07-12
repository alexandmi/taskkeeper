import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/tasks';
  
  constructor(private http: HttpClient) {}
  
  createTask(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateTask(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteTask(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}