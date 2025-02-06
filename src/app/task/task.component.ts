import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { NgIf } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
    standalone: true,
    imports: [NgIf, MatCard]
})
export class TaskComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
    const myNotUseVar = "Hello";
    console.log(myNotUseVar);
  }
}