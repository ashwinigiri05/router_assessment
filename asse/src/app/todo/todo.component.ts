import { Component, OnInit } from '@angular/core';

import{TodoService} from '../services/todo.service';
import{ToDo} from '../models/TODO';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  tasks;
  task: ToDo;
  index: number;

  constructor(toDoService: TodoService) {
    this.tasks = toDoService.tasks;
  }

  ngOnInit() {
  }
}
