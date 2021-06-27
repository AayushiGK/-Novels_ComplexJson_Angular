import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    if (!args) {
      return value;
    }
    else {
      const searchText = new RegExp(args, 'ig');
      return value.filter(books => {
        return (books.authors[0].name.search(searchText) !== -1 || books.title.search(searchText) !== -1);
      });
    }
  }
}