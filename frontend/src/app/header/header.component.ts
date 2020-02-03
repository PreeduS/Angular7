import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();
    selectFeature(feature){
      this.featureSelected.emit(feature);
    }
}