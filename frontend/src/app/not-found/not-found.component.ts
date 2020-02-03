import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  message;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // from route
    // {path: 'test', component: NotFoundComponent, data: {message: 'some message'}},
    this.message = this.route.snapshot.data['message']
  }

}
