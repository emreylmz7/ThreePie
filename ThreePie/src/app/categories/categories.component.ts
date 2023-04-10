import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  categories: Categories[] = [
    {id:1,name:"Anasayfa"},
    {id:2,name:"İlan Ekle"}

  ]

  ngOnInit(): void {
  }

}
