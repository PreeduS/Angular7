import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Signup, Signin, Logout, SetToken,  SIGNUP } from './auth.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
    @Effect({dispatch: false})
    authSignup = this.actions$.pipe(
        ofType(SIGNUP),
        mergeMap(x => [
            {first: x},
            {second: null}
        ]),
        map(x => {
            console.log(x);
            return x
        })
    );

    // dispatch: true, returned object with {type, payload} is dispatched
 
    // $ - observable
    constructor(private actions$: Actions ){

    }
}


// EffectsModule imports 