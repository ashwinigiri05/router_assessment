import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import{ TodoService} from '../../services/todo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
id;
 
  constructor(
    public toDoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
 
  onSubmitOfEditClick(){

  }

  onCancleOfEdit(){
     this.router.navigate(['Cancel'],{relativeTo:this.route})
  }


}
