import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelect(){
    //this.recipeSelected.emit(this.recipe)
    const data = {
      recipe: this.recipe,
      index: this.index
    }
    console.log('data... ',data)
    this.recipeService.recipeSelected.emit({data});

  }
}
