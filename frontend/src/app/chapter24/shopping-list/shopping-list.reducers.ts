import { Ingredient } from './ingredient.model';
import { ADD_INGREDIENT, UPDATE_INGREDIENT, DELETE_INGREDIENT, ShoppingListActions } from './shoppings-list.actions'


export interface State {
    ingredients: Ingredient[]
}
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions){
 
    switch(action.type){
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload

                ]
            }
        }
        case UPDATE_INGREDIENT: {
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = {
                ...state.ingredients[action.payload.index],
                ...action.payload.ingredient
            };
            return {
                ...state,
                ingredients: updatedIngredients
            }
        }
        case DELETE_INGREDIENT: {
            const updatedIngredients = [...state.ingredients];
            updatedIngredients.splice(action.payload.index, 1);
            return {
                ...state,
                ingredients: updatedIngredients
            }
        }
        default:
            return state;
    }


}