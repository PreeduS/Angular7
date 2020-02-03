import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { ServerComponent } from './server/server.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './forms/template/form/form.component';
import { FormReactiveComponent } from './forms/reactive/form-reactive/form-reactive.component';
 
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate.guard.service';

import { UserResolver } from './pages/users/user-resolver.service';

import { ShoppingList2Component } from './chapter24/shopping-list/shopping-list2.component';
import { Auth2Component } from './chapter24/auth/auth2.component';


const appRoutes: Routes = [
    { path: '', component: ServerComponent },
    // { path: 'users', component: UsersComponent },
    // { path: 'users/:id', component: UsersComponent }
  
    // or:
    // allows inner router-outlet
    {path: 'users',
      // canActivate: [AuthGuardService],       // protect all
      canActivateChild: [AuthGuardService],     // protect only children
      canDeactivate: [CanDeactivateGuard],      // can leave
      component: UsersComponent, 
    children:[
      {path: ':id', component: UsersComponent, resolve:{ userResolvedData: UserResolver } }
    ]},
  
    { path: 'form', component: FormComponent },
    { path: 'form-reactive', component: FormReactiveComponent },
    { path: 'not-found', component: NotFoundComponent },
    // {path: 'test', redirectTo: 'not-found'},
    { path: 'test', component: NotFoundComponent, data: {message: 'some message'} },
    { path: 'chapter24/shoppinglist2', component: ShoppingList2Component },  
    { path: 'chapter24/auth2', component: Auth2Component },  
    { path: '**', redirectTo: 'not-found' },
]
  

@NgModule({
    imports: [
       RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]

})

export class AppRoutingModule { }