import { Injectable } from '@angular/core';
import {ToDo} from '../models/TODO';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks = [
    new ToDo('Angular Session One', true, "CDAC"),
    new ToDo('Angular Session Two', false,'CDAC' ),
    new ToDo('Angular Session Three',false, 'CDAC' )
  ];
  constructor() { }
}
