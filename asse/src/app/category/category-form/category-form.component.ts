import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Output() addNewToDo = new EventEmitter<{
    name: String,
    category: String,
    status: Boolean
  }>();

  name: string = "";
  category: string = "";
  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.addNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

}
