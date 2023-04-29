import {Injectable} from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
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
    return of(this.taskMockService.tasksMockData).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  postTask(body: Task): Observable<number> {
    return of(this.taskMockService.tasksMockData.push(body)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateTask(index: number, body: Task): Observable<number> {
    this.taskMockService.tasksMockData.splice(index, 1);
    return of(this.taskMockService.tasksMockData.push(body)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  removeTask(index: number): Observable<Task[]> {
    return of(this.taskMockService.tasksMockData.splice(index, 1)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
