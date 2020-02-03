import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{
  constructor(private authService: AuthService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
   
    return this.authService.isAuthenticated().then((isAuthenticated) => {
      if(isAuthenticated){
        return true
      }else{
        this.router.navigate(['/'])
      }
    })

    // return this.store.select('auth').map( (authState: AuthState) => authState.authenticated )

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
   
    return this.authService.isAuthenticated().then((isAuthenticated) => {
      if(isAuthenticated){
        return true
      }else{
        this.router.navigate(['/'])
      }
    })

  }

}
