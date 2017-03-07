import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies',
      'Very tasty',
      'http://images.media-allrecipes.com/userphotos/560x315/1107530.jpg',
      [
        new Ingredient('Flour', 2),
        new Ingredient('Sugar', 1),
        new Ingredient('Eggs', 2)
      ]),
    new Recipe('Brownies', '' +
      'Yum',
      'http://images-gmi-pmc.edge-generalmills.com/43c1cb7d-2be4-4990-86e2-3c870505f0ed.jpg',
      [

      ]),
    new Recipe('Pasta',
      'Pretty good',
      'http://vittotheitalia.com/wp-content/uploads/2015/07/IMG_7170.jpg',
      [

        ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
