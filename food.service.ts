import { Injectable } from '@angular/core';
import { FoodDetails } from '../shared/models/food-details';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():FoodDetails[]{
    return [
      {
        id: 1,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/1.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:2,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/2.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:3,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/6.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:4,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/4.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:4,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/1.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:5,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/2.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:5,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/6.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      },
      {
        id:6,
        name: "Chow Mein",
        price: 250,
        favorite: false,
        star: 4.5,
        tags:['FastFood', 'Chinese', 'Lunch', 'Dinner'],
        imageUrl:'/assets/Images/menu/4.jpg',
        cookingTime:'15-20',
        cuisine:'Chinese',
      }
    
      /* '/assets/Images/menu/1.jpg',
      '/assets/Images/menu/2.jpg',
      '/assets/Images/menu/6.jpg',
      '/assets/Images/menu/4.jpg' */
    ];
  }
}
