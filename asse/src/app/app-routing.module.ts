import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TodoComponent} from './todo/todo.component';
import{CategoryComponent} from './category/category.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { ToDo } from './models/TODO';
import { EditformComponent } from './todo/editform/editform.component';


const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: 'new', component: TodoFormComponent},
      {path:'edit/:id',component:EditformComponent}
    ]
  },
  { path: 'category', component: CategoryComponent },
 
  {path:'**',redirectTo:'todo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
