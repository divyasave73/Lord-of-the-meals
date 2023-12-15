import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodDetails } from '../shared/models/food-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
public foods:FoodDetails[] = [];
public wallpaper:string[] = [];
constructor(
  private foodService:FoodService
){}
getWallpaper():string[]{
  return [
    '/assets/Images/cafe/1.jpg',
    '/assets/Images/cafe/2.jpg'
  ]
}
ngOnInit(): void {
  this.wallpaper = this.getWallpaper();
  this.foods = this.foodService.getAll(); //added food to component
}
}
