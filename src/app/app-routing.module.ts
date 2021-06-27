import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryBooksComponent } from './category-books/category-books.component';

export const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:category', component: CategoryBooksComponent }
];

export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: false
});