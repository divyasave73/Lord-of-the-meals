export class FoodDetails {
    id!:number;
    name!:string;
    price!:number;
    favorite:boolean = false;
    star:number = 0;
    tags?:string[];
    imageUrl!:string;
    cookingTime!:string;
    cuisine!:string;

}