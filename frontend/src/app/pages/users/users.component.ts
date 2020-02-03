import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { CanComponentDeactivate } from '../../can-deactivate.guard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  user: any//{id: number};
  paramsSubscription: Subscription;
  constructor( private route: ActivatedRoute){}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      idQs: this.route.snapshot.queryParams['id'],
      fragment: this.route.snapshot.fragment,
    }

    this.paramsSubscription = this.route.params.subscribe( (params: Params) => {
      this.user.id = params['id']
    })

    // this.route.queryParams.subscribe()
    // this.route.fragment.subscribe()


    // resolve
    // from route
    // {path: ':id', component: UsersComponent, resolve:{ userResolvedData: UserResolver } }
    this.route.data.subscribe(data => {
      console.log('resolved data ', data)
    })
  }

  ngOnDestroy(){
    // not needed in this case
    this.paramsSubscription.unsubscribe();
  }

  canDeactivate(data): Observable<boolean> | Promise<boolean> | boolean{
    console.log('data ',data)
    const allowed = false;
    return allowed;
  }
}
