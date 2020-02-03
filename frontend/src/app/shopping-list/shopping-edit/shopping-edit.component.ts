import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addRecipe = new EventEmitter<{name:string,amount:number}>();
  name:string;
  amount:number;
  constructor() { }

  ngOnInit() {
  }

  onAddRecipe(){console.log(this)
    const {name, amount} = this;
    if(name && amount !== undefined){
      this.addRecipe.emit({name, amount});
        this.name = '';
        this.amount = null;

    }
  }
}
