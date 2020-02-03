import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  filter = 'online'
  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('done')
    },2000)
  })
  servers = [
    {name: 'name', status: 'online'},
    {name: 'name 2', status: 'online'},
    {name: 'name 3', status: 'online'},
    {name: 'name 4', status: 'offline'},
    {name: 'name 5', status: 'offline'},
  ]
  constructor() { }

  
  addServer(){
    this.servers.push({name: 'name ' + (this.servers.length + 1), status: 'offline'})
  }

  toggleFilter(){
    this.filter = this.filter === 'online' ? 'offline' : 'online';
    console.log( this.filter )
  }
  ngOnInit() {
  }

}
