import { Action } from '@ngrx/store';
import { Ingredient } from './ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';


export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    // payload: Ingredient

    constructor(public payload: Ingredient) {}
}
export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT; 

    constructor(public payload: {index: number, ingredient: Ingredient}) {}
}
export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
    constructor(public payload: {index: number}) {}
}
export type ShoppingListActions = AddIngredient | UpdateIngredient | DeleteIngredient;