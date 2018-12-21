import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoService } from '../../services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

   todos;
 
  constructor
  (toDoService: TodoService, 
   private router: Router,
    private route: ActivatedRoute
    ) {
    this.todos = toDoService.tasks;
  }
  ngOnInit() {
  }

  onNewButtonClick() {
    
    this.router.navigate(['new'],{relativeTo : this.route});
 }
  
 onEditButtonClick(index){
  
  this.router.navigate(['/todo','edit',index]);
   
}
 deleteFieldValue(todo) {
  this.todos = this.todos.filter(t => t.name !== todo.name);
 }

}