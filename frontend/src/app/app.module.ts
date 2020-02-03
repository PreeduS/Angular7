import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './chapter5/cockpit/cockpit.component';
import { ServerElementComponent } from './chapter5/server-element/server-element.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './forms/template/form/form.component';
import { ShoppingList2Component } from './chapter24/shopping-list/shopping-list2.component';
import { Auth2Component } from './chapter24/auth/auth2.component';


// directives
import { HighlightDirective } from './shopping-list/shopping-edit/directive/highlight.directive';
import { Highlight2Directive } from './shopping-list/shopping-edit/directive/highlight2.directive';
import { CustomIfDirective } from './shopping-list/shopping-edit/directive/customIf.directive';
import { DropdownDirective } from './shopping-list/shopping-edit/directive/dropdown.directive';

// services
import { LoggingService } from './services/logging.service'
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate.guard.service';

import { UserResolver } from './pages/users/user-resolver.service';

import { AppRoutingModule } from './app-routing.modulte';
import { FormReactiveComponent } from './forms/reactive/form-reactive/form-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';


import { AuthInterceptor } from './shared/auth.interceptor';


import { StoreModule } from '@ngrx/store';
import { reducers } from './chapter24/store/app.reducers'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './chapter24/auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    HighlightDirective,
    Highlight2Directive,
    CustomIfDirective,
    DropdownDirective,
    UsersComponent,
    NotFoundComponent,
    FormComponent,
    ShoppingList2Component,
    Auth2Component,
    FormReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // template forms,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [
    LoggingService,
    ShoppingListService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuard,
    UserResolver,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
