import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend app';
  feature:string;
  // chapter 5
  @ViewChild('hrReference') hrReference;
  serverElements = [
    {type:'server', name: 'testServer', content: 'content data'},
    {type:'server', name: 'testServer2', content: 'content data2'},
  ];
  ngOnInit(){

    console.log('hrReference ',this.hrReference)
  }

  onServerAdded(e, divReference){
    console.log('onServerAdded ',e, divReference)
     this.serverElements.push({type:'server', name: 'testServer ...', content: 'content data ...'})
  }
  onBlueprintAdded(e, cockpitReference){
    console.log('onBlueprintAdded ',e, cockpitReference)
    // serverElements.push
  }

  navigateTo(feature){
    this.feature = feature;
  }

}


// #references - available only in the template where they are create