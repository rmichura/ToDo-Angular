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

  postTask(body: Task): Observable<unknown> {
    return of(this.taskMockService.tasksMockData.push(body))
  }
}
