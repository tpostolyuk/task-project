import { IFilm } from './../interfaces/index';

export const mockedFilms: IFilm[] = [
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
]
