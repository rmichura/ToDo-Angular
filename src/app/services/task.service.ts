import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Task} from "../interfaces/tasks-data.interface";
import {TaskMockService} from "../data/mocks/task-mock.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private taskMockService: TaskMockService,
  ) {
  }

  getTask(): Observable<Task[]> {
    return of(this.taskMockService.tasksMockData)
  }

  postTask(body: Task): Observable<number> {
    return of(this.taskMockService.tasksMockData.push(body))
  }

  updateTask(index: number, body: Task): Observable<number> {
    this.taskMockService.tasksMockData.splice(index, 1)
    return of(this.taskMockService.tasksMockData.push(body))
  }

  removeTask(index: number): Observable<Task[]> {
    return of(this.taskMockService.tasksMockData.splice(index, 1))
  }
}
