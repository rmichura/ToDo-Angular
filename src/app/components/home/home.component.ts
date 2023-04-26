import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/tasks-data.interface";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = []

  nameTask: string = ''

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTask().subscribe((res: Task[]) => {
      this.tasks = res
    })
  }

  doneTask([task, index]: any): void {
    const updateData: Task = {id: task.id, name: task.name, done: true}
    this.taskService.updateTask(index, updateData).subscribe()
  }

  detailsTask(task: Task): void {
    console.log(task)
  }

  addTask(): void {
    if (this.nameTask) {
      const newTask: Task = {id: this.tasks.length + 1, name: this.nameTask, done: false}
      this.taskService.postTask(newTask).subscribe((): string => this.nameTask = '')
    }
  }
}
