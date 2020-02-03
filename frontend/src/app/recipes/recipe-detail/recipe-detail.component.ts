import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected;
  constructor(
    private loggingService: LoggingService,
    private recipeService: RecipeService,
  ) { 
    this.loggingService.logUpdated.subscribe((data: string) => {
      console.log('subscribed from recipeDetail log: ', data);
    });


  }

  ngOnInit() {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeSelected.recipe.ingredients)
    

  }

}
