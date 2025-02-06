import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Task } from '../task/task';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-task-dialog',
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.css'],
    standalone: true,
    imports: [MatFormField, MatLabel, MatInput, FormsModule, MatDialogActions, MatButton, MatDialogClose]
})
export class TaskDialogComponent {
  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) { }

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }
}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
