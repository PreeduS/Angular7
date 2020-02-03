import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('el') element:{name:string, type:string, content:string};
  @ViewChild('viewChildDivRef') viewChildDivRef; 
  @ContentChild('contentChildDivRef') contentChildDivRef; 
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
    // called on bound input change
     console.log('ngOnChanges @Input change ',changes)
  }
  ngDoCheck(){
    // called during every change detection run, in the component class
    // console.log('ngDoCheck')
  }
  // ngAfterContentInit(){}     // called after content(ng-content) has been projected into view
  ngAfterContentInit(){
    console.log('viewChildDivRef', this.viewChildDivRef)          // no available, not present in the template view directly
    console.log('contentChildDivRef', this.contentChildDivRef)    // available, present in template by projection with ng-content
  }
  // ngAfterContentChecked(){}  // called every time the projected content has been checked
  // ngAfterViewInit(){}        // called after component's view (and child views) has been initialized
  // ngAfterViewIChecked(){}    // called every time the view (and child views) have been checked
  // ngOnDestroy(){}            // called once the component is about to be destroyed
} 
