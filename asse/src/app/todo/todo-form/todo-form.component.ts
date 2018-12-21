import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TodoService } from '../../services/todo.service';
import{ToDo} from '../../models/TODO';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
 todos;
  
  name: string = "";
  category: string = "";
  status: boolean = false;

  toDoService: TodoService;

  constructor
  (toDoService: TodoService ,
    private router : Router ,
    private route :  ActivatedRoute
   ) 
     {
    this.toDoService = toDoService;
  }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
     new ToDo(this.name,  this.status,this.category)
    );
    this.router.navigate(['submit'],{relativeTo :this.route})
    this.name = "";
    this.category = "";
    this.status = false;
  }

}
