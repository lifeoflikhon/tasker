import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }

  create(task: Task) {
    return this.http.post(``, task);
  }

  update(task: Task) {
    return this.http.put(`/${task.id}`, task);
  }

  delete(task: Task) {
    const updatedTask: Task = { ...task, isDeleted: true };
    this.update(updatedTask);
  }

  getAll() {
    const userId: number = 1;
    return this.http.get(`?userId=${userId}&isDeleted=false`);
  }

  getById(id: number) {
    return this.http.get(`/${id}`);
  }

  run(task: Task) {
    const updatedTask: Task = { ...task, isRunning: true, isBlocker: false, };
    this.update(updatedTask);
  }

  pause(task: Task) {
    const updatedTask: Task = { ...task, isRunning: false };
    this.update(updatedTask);
  }

  complete(task: Task) {
    const updatedTask: Task = { ...task, isCompleted: true, isRunning: false };
    this.update(updatedTask);
  }

  block(task: Task) {
    const updatedTask: Task = { ...task, isBlocker: true, isRunning: false };
    this.update(updatedTask);
  }
}
