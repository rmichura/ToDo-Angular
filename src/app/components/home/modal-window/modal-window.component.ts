import {Component, Input} from '@angular/core';
import {Task} from "../../../interfaces/tasks-data.interface";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html'
})
export class ModalWindowComponent {

  constructor(private taskService: TaskService) {
  }

  @Input()
  nameTask: string | any;

  @Input()
  indexTask: number | any;

  @Input()
  detailsTask: Task | any;

  update(): void {
    this.detailsTask.name = this.nameTask;
    this.taskService.updateTask(this.indexTask, this.detailsTask).subscribe();
  }

  remove(): void {
    this.taskService.removeTask(this.indexTask).subscribe();
  }
}
