import { Component, inject } from '@angular/core';
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
    imports: [MatFormField, MatLabel, MatInput, FormsModule, MatDialogActions, MatButton, MatDialogClose]
})
export class TaskDialogComponent {
  dialogRef = inject<MatDialogRef<TaskDialogComponent>>(MatDialogRef);
  data = inject<TaskDialogData>(MAT_DIALOG_DATA);

  private backupTask: Partial<Task> = { ...this.data.task };

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
