import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryBooksService {

  constructor(public http: HttpClient) { }

  getBooks( callback, errCallback) {
    const API = "http://skunkworks.ignitesol.com:8000/books";
    this.http.get(API).subscribe((data: any) => {
      callback(data);
    }, err => {
      errCallback(err);
    });
  }
}
