import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeService} from "./recipes/recipe.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  directives: [ HeaderComponent, ROUTER_DIRECTIVES],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'app works!';
}
