import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly endpoint: string = 'http://localhost:3001/projects';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.endpoint);
  }
}
