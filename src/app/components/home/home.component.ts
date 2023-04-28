import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/tasks-data.interface";
import {TaskService} from "../../services/task.service";

declare const window: WindowEventHandlersEventMap | any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  tasks: Task[] = []

  nameTask: string = ''

  indexTask: number | undefined

  detailsTask: Task | undefined;

  formModal: any;

  searchValue: string = ''

  selectedValue: string = ''

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((res: Task[]): void => {
      this.tasks = res
    })
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('detailsModal')
    )
  }

  doneTask([task, index]: any): void {
    task.done = true
    this.taskService.updateTask(index, task).subscribe()
  }

  addTask(): void {
    if (this.nameTask) {
      const newTask: Task = {id: this.tasks.length + 1, name: this.nameTask, done: false}
      this.taskService.postTask(newTask).subscribe(() => {
        this.tasks.sort(function (a, b) {
          return a.done > b.done ? 1 : -1
        })
        this.nameTask = ''
      })
    }
  }

  openModal([task, index]: any): void {
    this.detailsTask = task
    this.indexTask = index
    this.formModal.show();
  }
}
