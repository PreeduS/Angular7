import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        const {name, amount} = ingredient;
        this.ingredients.push(new Ingredient(name, amount))
        this.ingrdientsChange.emit(this.ingredients.slice());
    }
    ingrdientsChange = new EventEmitter<Ingredient[]>();

    // recipeSelected = new EventEmitter<{data:{recipe:Recipe, index: number}}>();

}