import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Recipe } from './recipe.model'
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [AccountService, RecipeService]                     // each imported service creates a new instance; replaces the parent one if exists
})
export class RecipesComponent implements OnInit {
  recipeSelected = {recipe:{}};
  constructor(
    private loggingService: LoggingService, 
    private accountSerivce: AccountService,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.loggingService.logStatusChange('RecipesComponent');

    console.log('accounts: ',this.accountSerivce.accounts);
    this.accountSerivce.addAccount();
    this.accountSerivce.addAccount();
    console.log('after add accounts: ',this.accountSerivce.accounts);
    //this.accountSerivce.removeAccount();
    //console.log('after remove accounts: ',this.accountSerivce.accounts);



    this.recipeService.recipeSelected.subscribe( ({data}) =>{console.log('data',data)
     this.recipeSelected.recipe = data.recipe
   })

  }
  @HostListener('click') clickHandler(){
    this.loggingService.logUpdated.emit('log emitted from recipes')
  }

  onRecipeSelected(data:{recipe:Recipe, index: number}){
    // this.recipeSelected = data;
  }
}
