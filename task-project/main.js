(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andriipostoliuk/Projects/task-project/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services */ "ZF+8");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");





function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.gender);
} }
class HomeComponent {
    constructor(_filmService) {
        this._filmService = _filmService;
        this.films = [];
        this.filteredFilms = [];
        this.categories = [];
        this.crewData = [];
        this.currentFilm = '';
        this.popupVisible = false;
        this.collapsed = false;
        this.contentReady = (e) => {
            if (!this.collapsed) {
                this.collapsed = true;
                e.component.expandRow(["EnviroCare"]);
            }
        };
        this.films = this._filmService.getAllFilms();
        this.filteredFilms = this._filmService.getAllFilms();
        this.categories = this._filmService.getAllCategories();
    }
    onSidebarItemClick(event) {
        const item = event.itemData;
        if (item.id !== 0) {
            const filteredArray = this.films.filter(film => film.category.id === item.id);
            this.filteredFilms = filteredArray;
        }
        else {
            this.filteredFilms = this.films;
        }
    }
    onCellClick(data) {
        this.popupVisible = true;
        this.crewData = data.actorList;
        this.currentFilm = data.name;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["FilmService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 15, vars: 17, consts: [[1, "home"], [1, "sidebar"], [1, "sidebar__title"], ["displayExpr", "label", "orientation", "vertical", 3, "dataSource", "onItemClick"], ["menu", ""], [1, "table"], ["id", "gridContainer", 3, "dataSource", "remoteOperations", "allowColumnReordering", "rowAlternationEnabled", "showBorders", "onRowClick", "onContentReady"], [3, "visible", "highlightCaseSensitive"], ["dataField", "name", "caption", "Name", "dataType", "string", "alignment", "left"], ["dataField", "category.label", "caption", "Category", "dataType", "string", "alignment", "left"], ["dataField", "length", "caption", "Length", "dataType", "number", "alignment", "left"], [3, "width", "height", "showTitle", "dragEnabled", "title", "closeOnOutsideClick", "visible", "visibleChange"], ["height", "100%", 3, "items"], [4, "dxTemplate", "dxTemplateOf"], [1, "item__title"], [1, "item__value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dx-menu", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function HomeComponent_Template_dx_menu_onItemClick_4_listener($event) { return ctx.onSidebarItemClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dx-data-grid", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRowClick", function HomeComponent_Template_dx_data_grid_onRowClick_7_listener($event) { return ctx.onCellClick($event.data); })("onContentReady", function HomeComponent_Template_dx_data_grid_onContentReady_7_listener($event) { return ctx.contentReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxo-search-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxi-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dx-popup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function HomeComponent_Template_dx_popup_visibleChange_12_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dx-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 16, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.filteredFilms)("remoteOperations", false)("allowColumnReordering", true)("rowAlternationEnabled", true)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true)("highlightCaseSensitive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Cast of: ", ctx.currentFilm, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 700)("height", 500)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", true)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.crewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "item");
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoSearchPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxiColumnComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxListComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_4__["DxTemplateDirective"]], styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 30px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  margin: 0 30px;\n}\n\n.sidebar__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.item__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.item__value[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUFFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUdwQjs7QUFFRTtFQUNFLGdCQUFnQjtBQUNwQjs7QUFDRTtFQUNFLGlCQUFpQjtBQUVyQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyIHtcbiAgbWFyZ2luOiAwIDMwcHg7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG4uaXRlbSB7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gICZfX3ZhbHVlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "1kFG":
/*!*************************************************!*\
  !*** ./src/app/shared/services/film.service.ts ***!
  \*************************************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return FilmService; });
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mock */ "PcQw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilmService {
    constructor() { }
    getAllFilms() {
        return _mock__WEBPACK_IMPORTED_MODULE_0__["mockedFilms"];
    }
    getFilmByCategoryId(categoryName) {
        return _mock__WEBPACK_IMPORTED_MODULE_0__["mockedFilms"].filter(film => film.category.label === categoryName);
    }
    getAllCategories() {
        return _mock__WEBPACK_IMPORTED_MODULE_0__["mockedCategories"];
    }
}
FilmService.ɵfac = function FilmService_Factory(t) { return new (t || FilmService)(); };
FilmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilmService, factory: FilmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6Vzs":
/*!**************************************!*\
  !*** ./src/app/shared/mock/films.ts ***!
  \**************************************/
/*! exports provided: mockedFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockedFilms", function() { return mockedFilms; });
const mockedFilms = [
    {
        name: 'Knives Out',
        length: 130,
        category: { id: 1, label: 'Comedy' },
        actorList: [
            { name: 'Daniel Craig', age: 53, gender: 'male' },
            { name: 'Chris Evans', age: 39, gender: 'male' },
            { name: 'Ana de Armas', age: 32, gender: 'female' },
            { name: 'Jamie Lee Curtis', age: 62, gender: 'female' }
        ]
    },
    {
        name: 'Eight Grade',
        length: 93,
        category: { id: 1, label: 'Comedy' },
        actorList: [
            { name: 'Elsie Fisher', age: 18, gender: 'female' },
            { name: 'Daniel Zolghadri', age: 22, gender: 'male' },
            { name: 'Fred Hechinger', age: 21, gender: 'male' },
            { name: 'Imani Lewis', age: 19, gender: 'male' }
        ]
    },
    {
        name: 'Us',
        length: 116,
        category: { id: 2, label: 'Horror' },
        actorList: [
            { name: 'Lupita Nyongo', age: 38, gender: 'female' },
            { name: 'Winston Duke', age: 42, gender: 'male' },
            { name: 'Elisabeth Moss', age: 32, gender: 'female' },
            { name: 'Tim Heidecker', age: 39, gender: 'male' }
        ]
    },
    {
        name: 'The Witch',
        length: 107,
        category: { id: 2, label: 'Horror' },
        actorList: [
            { name: 'Anya Taylor-Joy', age: 24, gender: 'female' },
            { name: 'Ralph Ineson', age: 51, gender: 'male' },
            { name: 'Kate Dickie', age: 50, gender: 'female' },
            { name: 'Harvey Scrimshaw', age: 20, gender: 'male' }
        ]
    },
    {
        name: 'Mission: Impossible - Fallout',
        length: 147,
        category: { id: 5, label: 'Action / Adventure' },
        actorList: [
            { name: 'Tom Cruise', age: 56, gender: 'male' },
            { name: 'Henry Cavill', age: 37, gender: 'male' },
            { name: 'Ving Rhames', age: 61, gender: 'male' },
            { name: 'Simon Pegg', age: 51, gender: 'male' }
        ]
    },
    {
        name: 'Mad Max: Fury Road',
        length: 120,
        category: { id: 5, label: 'Action / Adventure' },
        actorList: [
            { name: 'Tom Hardy', age: 43, gender: 'male' },
            { name: 'Charlize Theron', age: 45, gender: 'female' },
            { name: 'Nicholas Hoult', age: 61, gender: 'male' },
            { name: 'Josh Helman', age: 35, gender: 'male' }
        ]
    },
    {
        name: 'Lady Bird',
        length: 94,
        category: { id: 3, label: 'Drama' },
        actorList: [
            { name: 'Saoirse Ronan', age: 26, gender: 'female' },
            { name: 'Laurie Metcalf', age: 65, gender: 'female' },
            { name: 'Timothée Chalamet', age: 25, gender: 'male' },
            { name: 'Lucas Hedges', age: 24, gender: 'male' }
        ]
    },
    {
        name: 'Dunkirk',
        length: 107,
        category: { id: 3, label: 'Drama' },
        actorList: [
            { name: 'Fionn Whitehead', age: 23, gender: 'male' },
            { name: 'Tom Glynn-Carney', age: 26, gender: 'male' },
            { name: 'Jack Lowden', age: 30, gender: 'male' },
            { name: 'Harry Styles', age: 27, gender: 'male' }
        ]
    },
    {
        name: 'The Big Sick',
        length: 120,
        category: { id: 4, label: 'Romance' },
        actorList: [
            { name: 'Kumail Nanjiani', age: 43, gender: 'male' },
            { name: 'Zoe Kazan', age: 37, gender: 'female' },
            { name: 'Holly Hunter', age: 63, gender: 'female' },
            { name: 'Ray Romano', age: 63, gender: 'male' }
        ]
    },
    {
        name: 'Call Me By Your Name',
        length: 132,
        category: { id: 4, label: 'Romance' },
        actorList: [
            { name: 'Armie Hammer', age: 34, gender: 'male' },
            { name: 'Timothée Chalamet', age: 25, gender: 'male' },
            { name: 'Michael Stuhlbarg', age: 52, gender: 'male' },
            { name: 'Amira Casar', age: 49, gender: 'female' }
        ]
    },
];


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxMenuModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxBulletModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxTemplateModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxPopupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxBulletModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxTemplateModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_0__["DxListModule"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PcQw":
/*!**************************************!*\
  !*** ./src/app/shared/mock/index.ts ***!
  \**************************************/
/*! exports provided: mockedFilms, mockedCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./films */ "6Vzs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockedFilms", function() { return _films__WEBPACK_IMPORTED_MODULE_0__["mockedFilms"]; });

/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ "bvOT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockedCategories", function() { return _categories__WEBPACK_IMPORTED_MODULE_1__["mockedCategories"]; });





/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUF3QztFQUN4QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFBYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBpbXBvcnQgXCIuLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYXNlLWJnLCA1LjAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.module */ "99Un");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]] }); })();


/***/ }),

/***/ "ZF+8":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film.service */ "1kFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return _film_service__WEBPACK_IMPORTED_MODULE_0__["FilmService"]; });




/***/ }),

/***/ "bvOT":
/*!*******************************************!*\
  !*** ./src/app/shared/mock/categories.ts ***!
  \*******************************************/
/*! exports provided: mockedCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockedCategories", function() { return mockedCategories; });
const mockedCategories = [
    { id: 0, label: 'All' },
    { id: 1, label: 'Comedy' },
    { id: 2, label: 'Horror' },
    { id: 3, label: 'Drama' },
    { id: 4, label: 'Romance' },
    { id: 5, label: 'Action / Adventure' },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes), devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map