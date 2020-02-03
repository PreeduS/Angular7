import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from './ingredient.model';
import { Observable } from 'rxjs/internal/Observable';
import { AddIngredient, UpdateIngredient, DeleteIngredient } from './shoppings-list.actions'
import { AppState } from '../store/app.reducers'

@Component({
  selector: 'app-shopping-list2',
  templateUrl: './shopping-list.component.html',
  //styleUrls: ['./shopping-list.component.css']
})
export class ShoppingList2Component implements OnInit {
  shoppingListState: Observable<{ingredients:Ingredient[]}> 

  constructor(private store: Store<AppState>) {

  }
  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
 
   /* this.slService.ingrdientsChange.subscribe(ingredients =>{
      this.ingredients = ingredients;
    })*/
  }
  addIngredient(){
    this.store.dispatch(new AddIngredient(
      new Ingredient('New Ingredient', 10)
    ))
  }
  
  updateIngredient(index){
    this.store.dispatch(new UpdateIngredient(
      { index, ingredient: new Ingredient('Updated Ingredient', 5) }
    ))
  }
  deleteIngredient(index){
    this.store.dispatch(new DeleteIngredient(
      { index }
    ))
  }
}
