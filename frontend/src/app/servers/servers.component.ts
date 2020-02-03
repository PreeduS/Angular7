import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',     // <div app-servers></div>
  // selector: '.app-servers',      // <div class="app-servers"></div>
   templateUrl: './servers.component.html',
  /* template: `
    <b>{{header}}</b><br />
  `, */
   styleUrls: ['./servers.component.css']
  // styles: [`b { color: dodgerblue; }`]
})
export class ServersComponent implements OnInit {
  header: string = 'Header';
  allowNewServer: boolean = false;
  inputValue: string = '';
  inputValue2: string = 'inputValue2';
  servers = [];

  constructor() { 
    setTimeout(()=>this.allowNewServer=true,2000)
  }

  getValue(){ return 'value';  }
  toggleState(){ this.allowNewServer = !this.allowNewServer;  }
  onInputChange(event){ 
    // console.log(event);
    this.inputValue = event.target.value
  }
  getStyle(){
    return {
        'color': this.allowNewServer ? 'red': 'blue',
    }
  }

  addServer(){
    this.servers.push(this.inputValue2)
  }

  ngOnInit() {
  }

}


// directives
// *ngIf = ""          // * - structural directive, changes the structural of the dom




/*
# deprecated
<div *ngIf = "allowNewServer; else noServer">allowNewServer</div>

<ng-container #noServer>
  <div> no tempate deprecated</div>
</ng-container>



 */