import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  tasks;
  task: Category;
  index: number;

  constructor(categoryService: CategoryService ) 
  {
    this.tasks = categoryService.tasks;
   }

  ngOnInit() {
  }

}
