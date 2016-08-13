import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  directives: [ HeaderComponent, RecipesComponent, ShoppingListComponent],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'app works!';
}
