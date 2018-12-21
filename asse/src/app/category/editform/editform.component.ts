import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  @Output() editToDo = new EventEmitter<{
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
    this.editToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

}
