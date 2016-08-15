import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {Recipe} from "./recipe";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
  directives: [RecipeListComponent,ROUTER_DIRECTIVES]
})
export class RecipesComponent{

}
