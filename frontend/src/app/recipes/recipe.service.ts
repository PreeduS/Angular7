import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService){}

    private recipes:Recipe[] = [
        new Recipe('name','desc','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg',
        [
            new Ingredient('meat',1),
            new Ingredient('fries',20),
        ]),
        new Recipe('name2','desc','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg',
        [
            new Ingredient('meat',2),
            new Ingredient('fries',15),
        ]),
        new Recipe('name3','desc','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg',
        [
            new Ingredient('meat',2),
            new Ingredient('fries',20),
        ]),
      ]
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        ingredients.forEach(ingredient => {
            this.slService.addIngredient(ingredient)
        })
    }

    recipeSelected = new EventEmitter<{data:{recipe:Recipe, index: number}}>();
}