import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

 private  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty','https://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg',[
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat',1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'https://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',[
      new Ingredient('French Fries',3),
      new Ingredient('Pork Meat',1)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];

  }

  deleteRecipe(recipe: Recipe ){
    this.recipes.splice(this.recipes.indexOf(recipe),1);

  }

}
