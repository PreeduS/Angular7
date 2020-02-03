import { State as ShoppingList, shoppingListReducer } from '../shopping-list/shopping-list.reducers';
import { State as Auth, authReducer } from '../auth/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {         
    shoppingList: ShoppingList
    auth: Auth
}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: shoppingListReducer,
    auth: authReducer,
}