import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  public categories = [
    { name: "Fiction" },
    { name: "Philosophy" },
    { name: "Drama" },
    { name: "History" },
    { name: "Humour" },
    { name: "Adventure" },
    { name: "Politics" },
  ]

  ngOnInit(): void {
  }

  ShowBooks(category){
    console.log(category);
  }

}
