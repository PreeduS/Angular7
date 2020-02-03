import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<{recipe:Recipe, index:number}>();
  recipes:Recipe[] /*= [
    new Recipe('name','desc','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg'),
    new Recipe('name2','desc','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg'),
    new Recipe('name3','desc','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg'),
  ]
*/
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // console.log(this.recipes)
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe, index){
      this.recipeSelected.emit({recipe, index})
  }
}
