import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  tasks = [
    new Category('Angular Session One'),
    new Category('Angular Session two'),
    new Category('Angular Session two')
  ];
  constructor() { }
}
