import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
  directives: [RecipeItemComponent]

})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]=[];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
