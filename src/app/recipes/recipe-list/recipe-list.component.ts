import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
  directives: [RecipeItemComponent]

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty','http://kitchenproject.com/german/recipes/Schnitzel/schnitzel.jpg',[]),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg',[])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);

  }

  ngOnInit() {
  }

}
