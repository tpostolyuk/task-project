import { Component } from '@angular/core';

import { IFilm, ICategory, IActor } from './../../shared/interfaces';
import { FilmService } from './../../shared/services';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  public films: IFilm[] = [];
  public filteredFilms: IFilm[] = [];
  public categories: ICategory[] = [];
  public crewData: IActor[] = [];
  public currentCaregory!: ICategory;
  public currentFilm: string = '';
  public popupVisible: boolean = false;
  public collapsed: boolean = false;

  constructor (private _filmService: FilmService) {
    this.films = this._filmService.getAllFilms();
    this.filteredFilms = this._filmService.getAllFilms();
    this.categories = this._filmService.getAllCategories();
  }

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
  };

  onSidebarItemClick(event: any) {
    const item: ICategory = event.itemData;
    if (item.id !== 0) {
      const filteredArray = this.films.filter(film => film.category.id === item.id);
      this.filteredFilms = filteredArray;
    } else {
      this.filteredFilms = this.films;
    }
  }

  onCellClick(data: IFilm) {
    this.popupVisible = true;
    this.crewData = data.actorList;
    this.currentFilm = data.name;
  }
}
