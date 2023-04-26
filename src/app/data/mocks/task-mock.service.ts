import {Injectable} from "@angular/core";
import {Task} from "../../interfaces/tasks-data.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskMockService {

  tasksMockData: Task[] = [
    {
      name: "Do homework",
      done: false
    },
    {
      name: "Wash the dishes",
      done: false
    }
  ]
}
