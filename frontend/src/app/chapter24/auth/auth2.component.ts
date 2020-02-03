import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../store/app.reducers'
import { State as AuthState } from '../auth/auth.reducers';
import { Signup, Signin, Logout, SetToken } from './auth.actions';


@Component({
  selector: 'auth2',
  templateUrl: './auth2.component.html',
})
export class Auth2Component implements OnInit {
  authState: Observable<AuthState>;
  constructor(private store: Store<AppState>) {

  }
  ngOnInit() {
    this.authState = this.store.select('auth');
  }
 
  signUp(){
    this.store.dispatch(new Signup())
  }
}
