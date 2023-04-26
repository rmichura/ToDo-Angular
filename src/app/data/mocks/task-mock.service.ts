import {Injectable} from "@angular/core";
import {Task} from "../../interfaces/tasks-data.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskMockService {

  tasksMockData: Task[] = [
    {
      id: 1,
      name: "Do homework",
      done: false
    },
    {
      id: 2,
      name: "Wash the dishes",
      done: true
    }
  ]
}
