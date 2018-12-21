import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
//import { TodoService } from 'src/app/services/todo.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
  tasks;

  task:Category;
  index: number;
 
  
  constructor(categoryService: CategoryService ) 
  {
    this.tasks = categoryService.tasks;
   }

  ngOnInit() {
  }


}