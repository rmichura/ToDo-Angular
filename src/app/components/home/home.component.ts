import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/tasks-data.interface";
import {TaskService} from "../../services/task.service";

declare const window: WindowEventHandlersEventMap | any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = []

  nameTask: string = ''

  indexTask: number | undefined

  detailsTask: Task | undefined;

  formModal: any;

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
    const updateData: Task = {id: task.id, name: task.name, done: true}
    this.taskService.updateTask(index, updateData).subscribe()
  }

  addTask(): void {
    if (this.nameTask) {
      const newTask: Task = {id: this.tasks.length + 1, name: this.nameTask, done: false}
      this.taskService.postTask(newTask).subscribe((): string => this.nameTask = '')
    }
  }

  openModal([task, index]: any): void {
    this.detailsTask = task
    this.indexTask = index
    this.formModal.show();
  }
}
