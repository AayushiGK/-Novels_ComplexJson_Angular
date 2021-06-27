import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryBooksService } from './category-books.service';

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent implements OnInit {

  public title;
  public parameter;
  public books = [];
  public searchText;

  constructor(public activeRouter: ActivatedRoute, public bookService: CategoryBooksService) {
    this.title = this.activeRouter.params;
    this.title = this.title._value.category;
  }

  ngOnInit(): void {
    this.parameter = this.activeRouter.queryParams;
    this.parameter = this.parameter._value;
    if (this.parameter) {
      this.getBookByQueryParams(this.parameter);
    }
    if (Object.keys(this.parameter).length === 0) {
      this.getBooks();
    }
  }


  getBookByQueryParams(parameter) {
    this.bookService.getBooks(data => {
      data.results.forEach(element => {
        if (parameter.ids) {
          if (parameter.ids.includes(element.id)) {
            this.books.push(element);
          }
        }
        else if (parameter.languages) {
          if (parameter.languages.includes(element.languages)) {
            this.books.push(element);
          }
        } else if (parameter.mime_type) {
          let formats = Object.keys(element.formats);
          let flag = false;
          formats.forEach(formats_element => {
            if (parameter.mime_type.split("/")[0] == formats_element.split("/")[0]) {
              flag = true;
            }
          });
          if (flag)
            this.books.push(element);
        }
      });
    }, err => {
      console.log(err);
    });
  }
  // text/html; charset=utf-8
  getBooks() {
    this.bookService.getBooks(data => {
      data.results.forEach(element => {
        let flag = false;
        element.subjects.forEach(element_sub => {
          if (element_sub.includes(this.title)) {
            flag = true;
          }
        });
        if (flag) {
          element.link = element.formats['text/html; charset=utf-8'];
          this.books.push(element)
          console.log('element ',element)
        }
      });
    }, err => {
      console.log(err)
    })
  }

}
