export interface IFilm {
  name: string
  category: ICategory
  length: number
  actorList: IActor[]
}

export interface ICategory {
  id: number
  label: string
}

export interface IActor {
  name: string
  age: number
  gender: string
}
