import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('svCreated') serverCreated = new EventEmitter<any>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<any>();;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.serverCreated.emit('serverCreated emit')
  }
  onAddBlueprint(){
    this.blueprintCreated.emit('blueprintCreated emit')
  }

}
