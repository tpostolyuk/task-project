import { Injectable } from '@angular/core';

import { mockedFilms, mockedCategories } from './../mock';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor() {}

  getAllFilms() {
    return mockedFilms;
  }

  getFilmByCategoryId(categoryName: string) {
    return mockedFilms.filter(film => film.category.label === categoryName);
  }

  getAllCategories() {
    return mockedCategories;
  }

}
