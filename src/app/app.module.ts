import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { BookSearchPipe } from './pipes/book-search.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryBooksComponent,
    BookSearchPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }